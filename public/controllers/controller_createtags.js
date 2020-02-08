dashApp.controller('createTagsController', function ($scope, $http, $q, $location, $timeout, $window, $rootScope) {
    var thisCtrl = this;
    const lang = ['en-hi', 'en-ru', 'en-fr', 'en-es', 'en-pt', 'en-it'];
    thisCtrl.SelectedCategory = '';
    thisCtrl.tagValue = '';
    thisCtrl.categoryOptions = [];
    thisCtrl.tagsData = [];
    thisCtrl.settings = [];
    thisCtrl.showUpgradeButtonAndUpgradeDesc = false;//show UpgradeButton
    thisCtrl.hideAddnewTagButton = true;//for hide Add new Tag button
    thisCtrl.TagSearch = undefined;
    thisCtrl.tagsOrderBy = '';
    thisCtrl.tagExist = false;//for find the title exist or not
    thisCtrl.tagExistEdit = false;//for Edit tag Exist
    thisCtrl.addBtnEnable = false;//for Enable add button check for Tags Exist 
    thisCtrl.keepGoing = true;//variable for use break if match found
    thisCtrl.adBtnLdr = { add: true, adding: false, added: false };
    thisCtrl.editBtnLdr = { edit: false, editing: false };

    $http.get("/get-tag-data/" + Wix.Utils.getInstanceId()).then(function (data) {
        if (data != undefined && data.data != undefined && data.data.length > 0) {
            angular.forEach(data.data, function (val) {
                if (val.ParentId != null && val.ParentId != 0) {

                    val.mode = 'view';
                    for (let index = 0; index < data.data.length; index++) {
                        let temp = data.data[index];
                        if (temp._id == val.ParentId) {
                            val.Parent = temp;
                            break;
                        }
                    }
//                     hello this is test for the next 
                    if (thisCtrl.settings.category["DISP_" + (val.Parent.Title).toUpperCase()] == true) {
                        thisCtrl.tagsData.push(val);

                    }
                    //thisCtrl.tagsData.push(val);
                }
                if (val.ParentId == 0 && val.Title != undefined && !val.Title.toLowerCase().includes('test')) {
                    //code for on off the setting data
                    if (thisCtrl.settings.category["DISP_" + (val.Title).toUpperCase()] == true) {
                        thisCtrl.categoryOptions.push(val);

                    }
                    //code for on off the setting data
                }

            });
        }
    }, function (err) {
        console.log(err);
    });
    $http.get("/getSettings/" + Wix.Utils.getInstanceId()).then(function (payload) {
        thisCtrl.settings = payload.data;
    });
    thisCtrl.basedoncategorySelection = function (val) {
        if (thisCtrl.SelectedCategory == undefined || thisCtrl.SelectedCategory == '' || thisCtrl.SelectedCategory == '[]') {
            return true;
        } else {
            let temp = JSON.parse(thisCtrl.SelectedCategory);
            if (temp._id == val.ParentId) {
                return true;
            } else {
                return false;
            }
        }
    }
    thisCtrl.saveTagData = function () {
        thisCtrl.loaderConfi('adding', thisCtrl.adBtnLdr);
        var promises = [];
        var langContent = { en: thisCtrl.tagValue };
        var convertedTagData = thisCtrl.convertTagData(thisCtrl.tagValue);
        convertedTagData.then(function (suc) {
            angular.forEach(suc, function (val) {
                if (val && val.data && val.data.lang) {
                    langContent[val.data.lang.slice(-2)] = val.data.text[0];
                }
            });
            handleyandexfallback();
        }, function (err) {
            //fallback handling if yandex api cross its limit.
            if (err.status == -1) {
                handleyandexfallback();
            }
        });
        function handleyandexfallback() {
            promises.push(thisCtrl.postLangData(langContent));
            promises.push(thisCtrl.saveTagEntry());
            promises.push(thisCtrl.updateTagOrderCount(JSON.parse(thisCtrl.SelectedCategory)));
            $q.all(promises).then(function (suc) {
                thisCtrl.loaderConfi('added', thisCtrl.adBtnLdr);
                $timeout(function () {
                    thisCtrl.loaderConfi('add', thisCtrl.adBtnLdr);
                    var newTagData = suc.filter(function (val) { return val.config.url == '/insert-tag-data/' + Wix.Utils.getInstanceId() });
                    if (newTagData && newTagData.length > 0) {
                        newTagData = newTagData[0];
                        newTagData.data['mode'] = 'view';
                        newTagData.data.Parent = JSON.parse(thisCtrl.SelectedCategory);
                        thisCtrl.tagsData.unshift(newTagData.data);
                        settingFormtopristineMode();
                    }
                }, 1000);
            }, function (err) {
                console.log(err);
                thisCtrl.loaderConfi('add', thisCtrl.adBtnLdr);
                settingFormtopristineMode();
            })
        }
    }
    thisCtrl.saveTagEntry = function () {
        let postData = {
            Title: thisCtrl.tagValue,
            ParentId: JSON.parse(thisCtrl.SelectedCategory)._id,
            Order: JSON.parse(thisCtrl.SelectedCategory).Order,
            Type: 'SubCategory',

        };
        console.log($rootScope.tagsData);
        return $http.post('/insert-tag-data/' + Wix.Utils.getInstanceId(), postData);
    }

    thisCtrl.updateTagOrderCount = function (body) {
        let postData = {
            Order: body.Order + 1,
        };
        var promise = $http.put("/update-tag-data/" + body._id, postData);
        promise.then(function (suc) {
            angular.forEach(thisCtrl.categoryOptions, function (category) {
                if (body._id == category._id) {
                    category.Order++;
                }
            })
        }, function (err) {
            console.log('Something went wrong.');
        })
        return promise;
    }
    //code for Restict The last Tag Delete
    thisCtrl.TagDeleteRestriction = function (id, title) {
        var parentId = 0;
        var count = 0;
        for (var i = 0; i < thisCtrl.tagsData.length; i++) {
            if (thisCtrl.tagsData[i].Title == title) {
                parentId = thisCtrl.tagsData[i].ParentId;
                break;
            }
        }
        for (var i = 0; i < thisCtrl.tagsData.length; i++) {
            if (thisCtrl.tagsData[i].ParentId == parentId) {
                count++;
            }
        }
        if (count > 1) {
            thisCtrl.DeleteTagRelatedData(id, title);
        }
        else {
            alert("You Can't Delete Last Data of This Catagory");
        }

    }
    //code for Restict The last Tag Delete
    thisCtrl.DeleteTagRelatedData = function (Id, Title) {
        let promise = [];
        promise.push(thisCtrl.deleteTag(Id));
        promise.push(thisCtrl.deletelang(Title));
        $q.all(promise).then(function (suc) {
            console.log('Do here After deletion');
        }, function (err) {

        });

    };
    thisCtrl.deleteTag = function (Id) {
        return $http.delete('/delete-tag-data/' + Id).then(function (success) {
            angular.forEach(thisCtrl.tagsData, function (val, index) {
                if (Id == val._id) {
                    thisCtrl.tagsData.splice(index, 1);
                }
            });
        }, function (err) {
            alert('Something went wrong.Please try Again.');
        })
    }
    thisCtrl.deletelang = function (langVal) {
        return $http.delete('/delete-lang-data/' + langVal);
    }
    thisCtrl.convertTagData = function (text) {
        let allCalls = [];
        let key = 'trnsl.1.1.20191202T123103Z.49787420d01af13d.a51078a91bd355f56e6b149e37b292f4e8cea450';
        let baseUrl = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
        angular.forEach(lang, function (val) {
            let query = baseUrl + '?key=' + key + '&text=' + escape(text) + '&lang=' + val + '&format=plain';
            allCalls.push($http.post(query));
        });
        return $q.all(allCalls);
    }
    thisCtrl.postLangData = function (body) {
        return $http.post('/insert-lang-data', body);
    }
    thisCtrl.loaderConfi = function (key, obj) {
        for (let val in obj) {
            if (val == key) {
                obj[val] = true;
            } else {
                obj[val] = false;
            }
        }
    }
    const settingFormtopristineMode = function () {
        thisCtrl.SelectedCategory = '';
        thisCtrl.tagValue = '';
        $scope.createTagForm.$setUntouched();
        $scope.createTagForm.$setPristine();
    }
    thisCtrl.editATag = function (tag) {
        thisCtrl.loaderConfi('edit', thisCtrl.editBtnLdr);
        angular.forEach(thisCtrl.tagsData, function (tag) {
            if (tag.mode == 'edit') {
                tag.mode = 'view';
                thisCtrl.cancelEditedTag(tag, '');
            }
        });
        thisCtrl.copyCurntTag = angular.copy(tag);
        tag.mode = 'edit';
    }
    thisCtrl.cancelEditedTag = function (tag, loadConfig) {
        for (let key in tag) {
            tag[key] = thisCtrl.copyCurntTag[key];
        }
        thisCtrl.copyCurntTag = null;
        if (loadConfig == undefined)
            thisCtrl.loaderConfi('', thisCtrl.editBtnLdr);
    }
    //code for edit restiction Value Restriction
    thisCtrl.tagEditValueRestriction = function (tag) {
        thisCtrl.tagExistEdit = false;
        if (tag.Title != undefined && tag.Title != "") {
            var numofOccurance = 0;
            for (let index = 0; index < thisCtrl.tagsData.length - 1; index++) {
                //let temptag=thisCtrl.tagsData[index]
                if (tag.Title.toLowerCase().trim() == thisCtrl.tagsData[index].Title.toLowerCase().trim()) {
                    numofOccurance++;
                    if (numofOccurance > 1) {
                        thisCtrl.tagExistEdit = true;
                        break;
                    }
                }
            }
            (thisCtrl.tagExistEdit == true) ? alert('Tag Exist please try any Other!!') : thisCtrl.saveEditedTag(tag);
        }
        else {
            alert("The field will not be Empty")
        }
    }
    //code for edit Restriction Value Restriction end here  
    thisCtrl.saveEditedTag = function (tag) {
        let langContent = { en: tag.Title };
        let postData = {
            Title: tag.Title,
            ParentId: tag.Parent._id
        }
        let langUpdatePostData = {
            old: thisCtrl.copyCurntTag.Title,
            new: langContent
        }
        let allCalls = [];
        thisCtrl.loaderConfi('editing', thisCtrl.editBtnLdr);
        thisCtrl.convertTagData(tag.Title).then(function (suc) {
            angular.forEach(suc, function (val) {
                if (val && val.data && val.data.lang) {
                    langContent[val.data.lang.slice(-2)] = val.data.text[0];
                }
            });
            langUpdatePostData.new = langContent;
            handleyandexfallback();
        }, function (err) {
            handleyandexfallback();
        })
        function handleyandexfallback() {
            if (tag.Parent._id != tag.ParentId) {
                postData.Order = tag.Parent.Order;
                allCalls.push(thisCtrl.updateTagOrderCount(tag.Parent));
            }
            allCalls.push($http.put("/update-tag-data/" + tag._id, postData));
            allCalls.push($http.put("/update-lang-data/", langUpdatePostData));
            Promise.all(allCalls).then(function (suc) {
                $timeout(function () {
                    tag.ParentId = tag.Parent._id;
                    tag.Order = postData.Order;
                    tag.mode = 'view';
                    thisCtrl.copyCurntTag = null;
                })
            }, function (err) {
                console.log(err);
                alert('Something went wrong.');
                thisCtrl.cancelEditedTag(tag);
            })
            Promise.race(allCalls).then(function (suc) {
                thisCtrl.loaderConfi('', thisCtrl.editBtnLdr);
            }, function (err) {
                alert('Something went wrong.');
                thisCtrl.cancelEditedTag(tag);
            });
        }
    }
    thisCtrl.setOrderBy = function () {
        $timeout(function () {
            if (thisCtrl.SelectedCategory && thisCtrl.SelectedCategory != '')
                thisCtrl.tagsOrderBy = 'Order';
            else thisCtrl.tagsOrderBy = '';
        });
    }
    thisCtrl.dropped = function (dragtag, droptag) {
        var SelectedCategory = JSON.parse(thisCtrl.SelectedCategory);
        let originalDropTagOrder = angular.copy(droptag.Order);
        let originalDragTagOrder = angular.copy(dragtag.Order);
        var FilterDataAsInView = thisCtrl.tagsData.filter(function (tag) { return tag.ParentId == SelectedCategory._id });
        FilterDataAsInView.sort(function (a, b) {
            return a.Order - b.Order;
        });
        if (dragtag.Order < droptag.Order) {
            for (let index = FilterDataAsInView.length - 1; index >= 0; index--) {
                let val = FilterDataAsInView[index];
                if (val.Order <= droptag.Order && val.Order > dragtag.Order) {
                    val.Order = FilterDataAsInView[index - 1].Order;
                }
                else if (val.Order == dragtag.Order) {
                    val.Order = originalDropTagOrder;
                    break;
                }
            }
        }
        else if (dragtag.Order > droptag.Order) {
            for (let index = 0; index < FilterDataAsInView.length; index++) {
                let val = FilterDataAsInView[index];
                if (val.Order >= droptag.Order && val.Order < dragtag.Order) {
                    val.Order = FilterDataAsInView[index + 1].Order;
                }
                else if (val.Order == dragtag.Order) {
                    val.Order = originalDropTagOrder;
                    break;
                }
            }
        }
        thisCtrl.updateOrderInBackend(originalDropTagOrder, originalDragTagOrder, angular.copy(FilterDataAsInView)).then(function (suc) {
            console.log(suc);
        }, function (err) {
            console.log(err);
        });
    }
    thisCtrl.updateOrderInBackend = function (dropOdr, dragOdr, FilterDataAsInView) {
        let allCalls = [];
        FilterDataAsInView.forEach(function (tag) {
            if (dragOdr < dropOdr) {
                if (tag.Order >= dragOdr && tag.Order <= dropOdr) {
                    allCalls.push(
                        $http.put("/update-tag-data/" + tag._id, { Order: tag.Order })
                    )
                }
            } else if (dropOdr < dragOdr) {
                if (tag.Order >= dropOdr && tag.Order <= dragOdr) {
                    allCalls.push(
                        $http.put("/update-tag-data/" + tag._id, { Order: tag.Order })
                    )
                }
            }
        });
        return $q.all(allCalls);
    }
    //check list
    //checking back button in create tags 
    thisCtrl.checkBackButton = function () {
        console.log("i clicked ");

        var modal = new tingle.modal({
            footer: true,
            stickyFooter: false,
            closeMethods: ['overlay', 'button', 'escape'],
            closeLabel: "Close",
            onOpen: function () {
                console.log('modal open');
            },
            onClose: function () {
                console.log('modal closed');
            },
            beforeClose: function () {
                //some logic e.g. save content before closing the modal
                return true; // close the modal
                return false; // nothing happens
            }
        });

        // set content
        modal.setContent('<h1>Go Back</h1><p>Sure you want to exit? You may lose unsaved changes.</p>');
        // add another button
        modal.addFooterBtn('Close', 'tingle-btn tingle-btn--primary tingle-btn--pull-right', function () {
            // here goes some logic
            modal.close();
        });
        // add a button
        modal.addFooterBtn('Back to Home', 'tingle-btn tingle-btn--default tingle-btn--pull-right', function () {
            // here goes some logic
            modal.close();
            $timeout(function () {
                thisCtrl.gotoDash();
            }, 0)
        });
        modal.open();
    };
    thisCtrl.gotoDash = function () {
        $location.path("/");
    };
    //close button code 
    //code for watcher to tag value
    $scope.$watch('createTag.tagValue', function () {
        if (thisCtrl.tagValue != undefined && thisCtrl.tagValue != '' && thisCtrl.tagValue.length > 0) {
            thisCtrl.tagExist = false;
            for (let index = 0; index < thisCtrl.tagsData.length; index++) {
                let temptag = thisCtrl.tagsData[index];
                if (thisCtrl.tagValue.toLowerCase().trim() == temptag.Title.toLowerCase().trim()) {
                    thisCtrl.tagExist = true;
                    thisCtrl.addBtnEnable = false;
                    break;
                }
            }
        } else {
            thisCtrl.tagExist = false;
        }
        thisCtrl.addBtnEnable = (thisCtrl.tagExist == true) ? false : true;
    });
    //code for watcher end
    //code for prime user validation
    thisCtrl.AddTagPaidUser = function () {
        var tagCount = 0;
        for (var i = 0; i < thisCtrl.tagsData.length; i++) {
            if (thisCtrl.tagsData[i].instanceId == Wix.Utils.getInstanceId()) {
                tagCount++;
            }
        }
        console.log(tagCount);
        var instanceValue = getQueryVariable('instance');

        var pair = instanceValue.split('.');
        var data = pair[1];
        data = decodeURIComponent(data)
        var base64 = $window.atob(data);
        var base64obj = JSON.parse(base64)
        if (tagCount < 2 || base64obj.vendorProductId != undefined) {
            thisCtrl.saveTagData();
        }
        else {
            //upgrade button show
            thisCtrl.hideAddnewTagButton = false;
            thisCtrl.showUpgradeButtonAndUpgradeDesc = true;
            // Wix.Dashboard.openBillingPage();
        }
    }
    function getQueryVariable(variable) {
        var query = $window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) { return pair[1]; }
        }
        return (false);
    }
    thisCtrl.Openbillingpage = function () {
        Wix.Dashboard.openBillingPage();
    }

    //code for prime user validation 

    //code for Confirm-Deletion STARTS Here
    thisCtrl.confirmDeletion = function (id, title) {

        var modal = new tingle.modal({
            footer: true,
            stickyFooter: false,
            closeMethods: ['overlay', 'button', 'escape'],
            closeLabel: "Close",
            onOpen: function () {
                console.log('modal open');
            },
            onClose: function () {
                console.log('modal closed');
            },
            beforeClose: function () {
                //some logic e.g. save content before closing the modal
                return true; // close the modal
                return false; // nothing happens
            }
        });

        // set content
        modal.setContent('<h1>Confirm-Deletion</h1><p>Sure you want to Delete ' + title + 'this tag?</p>');
        // add another button
        modal.addFooterBtn('Cancel', 'tingle-btn tingle-btn--default tingle-btn--pull-right', function () {
            // here goes some logic
            modal.close();

        });
        // add a button
        modal.addFooterBtn('Delete', 'tingle-btn tingle-btn--danger tingle-btn--pull-right', function () {
            // here goes some logic
            modal.close();
            $timeout(function () {
                thisCtrl.TagDeleteRestriction(id, title);
            }, 0)

        });
        modal.open();

    };

    //Code for Confirm-Deletion ENDS Here


});
dashApp.directive('lvlDraggable', ['$rootScope', function ($rootScope) {
    return {
        restrict: 'A',
        scope: {
            onDrop: '&',
            tag: '=',
            isCategorySelected: '='
        },
        link: function (scope, el, attrs, controller) {

            angular.element(el).attr("draggable", "true");

            el.bind("dragstart", function (e) {
                $rootScope.dragTag = scope.tag;
            });
            el.bind("dragover", function (e) {
                if (e.preventDefault) {
                    e.preventDefault(); // Necessary. Allows us to drop.
                }
                if ($rootScope.dragTag.Order < scope.tag.Order) {
                    if (!$(e.target).parents("tr").hasClass("drag-enter-top")) {
                        $(e.target).parents("tr").addClass("drag-enter-top");
                    }

                }
                if ($rootScope.dragTag.Order > scope.tag.Order) {
                    if (!$(e.target).parents("tr").hasClass("drag-enter-bottom")) {
                        $(e.target).parents("tr").addClass("drag-enter-bottom");
                    }
                }
                //e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
                return false;
            });
            el.bind('dragenter', function (e) {
                if ($rootScope.dragTag.Order < scope.tag.Order) {
                    if (!$(e.target).parents("tr").hasClass("drag-enter-top")) {
                        $(e.target).parents("tr").addClass("drag-enter-top");
                    }

                }
                if ($rootScope.dragTag.Order > scope.tag.Order) {
                    if (!$(e.target).parents("tr").hasClass("drag-enter-bottom")) {
                        $(e.target).parents("tr").addClass("drag-enter-bottom");
                    }
                }
                //angular.element(e.target).addClass('drag-enter');
            })
            el.bind("dragleave", function (e) {
                if ($rootScope.dragTag.Order < scope.tag.Order)
                    $(e.target).parents("tr").removeClass("drag-enter-top");
                if ($rootScope.dragTag.Order > scope.tag.Order)
                    $(e.target).parents("tr").removeClass("drag-enter-bottom");
                //angular.element(e.target).removeClass('drag-enter');  // this / e.target is previous target element.
            });
            el.bind("drop", function (e) {
                if (e.preventDefault) {
                    e.preventDefault(); // Necessary. Allows us to drop.
                }

                if (e.stopPropagation) {
                    e.stopPropagation(); // Necessary. Allows us to drop.
                }
                if ($rootScope.dragTag.Order < scope.tag.Order)
                    $(e.target).parents("tr").removeClass("drag-enter-top");
                if ($rootScope.dragTag.Order > scope.tag.Order)
                    $(e.target).parents("tr").removeClass("drag-enter-bottom");
                if (scope.isCategorySelected && scope.isCategorySelected != '') {
                    scope.onDrop({ dragged: $rootScope.dragTag, dropped: scope.tag });
                } else {
                    alert('Please Choose a category first ');
                }
            });
        }
    }
}]);
