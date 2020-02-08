const { db } = require("./server");
function updatetagValue(tagValue, instanceId) {
  db.testdata.findAndModify({
    query: { instanceId: instanceId },
    update: { $set: { id: tagValue + 1 } },
    new: true
  }, function (err, docs) {
    if (docs) {
      res.send(docs);
    }
    else
      res.send(err);
  });
}
exports.updatetagValue = updatetagValue;
