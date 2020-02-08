var app = angular.module('StarterApp', ['WixControls','pascalprecht.translate']);
app.config(function($translateProvider) {

    $translateProvider.fallbackLanguage('en')
     $translateProvider.registerAvailableLanguageKeys(['en','es','pt','fr','ru','hi','it'],{
        'en_*' : 'en',
        'es_*' : 'es',
        'pt_*' : 'pt',
        'fr_*' : 'fr',
        'ru_*' : 'ru',
        'hi_*' : 'hi',
        'it_*' : 'it'
    })

 $translateProvider.translations('en', {
    'BUTTON-CONTACTUS': 'Contact Us',
    'BUTTON-UPGRADE': 'Upgrade',
    'BUTTON-UPGRADENOW': 'Upgrade Now',
    'BUTTON-GOTO': 'Go To',
    'BUTTON-SAVECHANGES': 'Save Changes',
    'BUTTON-DRAFTS': 'Drafts',
    'BUTTON-ADDARECIPE': 'Add a Recipe',
    'BUTTON-BACK': 'Back',
    'BUTTON-NEXT': 'Next',
    'BUTTON-DELETERECIPE': 'Delete Recipe',
    'BUTTON-SAVERECIPE': 'Save Recipe',
    'BUTTON-SAVERECIPETODRAFTS': 'Save Recipe to Drafts',
    'BUTTON-SUBMITRECIPE': 'Submit Recipe',
    'BUTTON-CREATERECIPE': 'Create Recipe',
    'TEXT-WELCOME': 'Welcome to the Recipes App!',
    'TEXT-WELCOME2': 'To get started , add your first recipe.',
    'TEXT-INTRO': 'Intro',
    'TEXT-GENERALINFO': 'General Info',
    'TEXT-IMAGE': 'Image',
    'TEXT-INGREDIENTS': 'Ingredients',
    'TEXT-DIRECTIONS': 'Instructions',
    'TEXT-TIPS': 'Expert Tips',
    'TEXT-RECIPENAME': 'Recipe Name',
    'TEXT-ShortRECIPENAME': 'Enter a short title for your recipe eg. Chicken Tikka Masala',
    'TEXT-ErrRECIPENAME': 'The Recipe name is required and should be less than 50 characters',
    'TEXT-DESC': 'Description',
    'TEXT-ShortDESC': 'Enter a short description for your recipe',
    'TEXT-ErrDESC': 'The description is required and should be less than 500 characters',
    'TEXT-TAGS': 'Tags',
    'TEXT-SHRIMP': 'Shrimp',
    'TEXT-CHICKEN': 'Chicken',
    'TEXT-EGG': 'Egg',
    'TEXT-FISH': 'Fish',
    'TEXT-BEEF': 'Beef',
    'TEXT-OFFAL': 'Offal',
    'TEXT-DUCK': 'Duck',
    'TEXT-PORK': 'Pork',
    'TEXT-SCALLOPS': 'Scallops',
    'TEXT-TURKEY': 'Turkey',
    'TEXT-PASTA': 'Pasta',
    'TEXT-RABBIT': 'Rabbit',
    'TEXT-RICE': 'Rice',
    'TEXT-SALMON': 'Salmon',
    'TEXT-TROUT': 'Trout',
    'TEXT-MACKEREL': 'Mackerel',
    'TEXT-SARDINES': 'Sardines',
    'TEXT-COD': 'Cod',
    'TEXT-POLLOCK': 'Pollock',
    'TEXT-HAKE': 'Hake',
    'TEXT-GREYMULLET': 'Grey Mullet',
    'TEXT-LOBSTER': 'Lobster',
    //'TEXT-SCALLOPS': 'Scallops',
    'TEXT-MUSSELS': 'Mussels',
    'TEXT-CLAMS': 'Clams',
    'TEXT-LAMB': 'Lamb',
    'TEXT-AMERICAN': 'American',
    'TEXT-JAPANESE': 'Japanese',
    'TEXT-INDIAN': 'Indian',
    'TEXT-CHINESE': 'Chinese',
    'TEXT-AFRICAN': 'African',
    'TEXT-ASIAN': 'Asian',
    'TEXT-MIDDLEEASTERN': 'Middle Eastern',
    'TEXT-GERMAN': 'German',
    'TEXT-GREEK': 'Greek',
    'TEXT-ITALIAN': 'Italian',
    'TEXT-MEXICAN': 'Mexican',
    'TEXT-THAI': 'Thai',
    'TEXT-CARRIBEAN': 'Carribean',
    'TEXT-ENGLISH-SCOTTISH': 'English-Scottish',
    'TEXT-FRENCH': 'French',
    'TEXT-GLUTENFREE': 'Gluten Free',
    'TEXT-INDONESIAN': 'Indonesian',
    'TEXT-VEGAN': 'Vegan',
    'TEXT-VEGETARIAN': 'Vegetarian',
    'TEXT-APPETIZER': 'Appetizer',
    'TEXT-ENTREE': 'Entree',
    'TEXT-BREAD': 'Bread',
    'TEXT-DESSERT': 'Dessert',
    'TEXT-COCKTAIL': 'Cocktail',
    'TEXT-NONALCOHOLICBEVERAGES': 'Non-Alcoholic Beverages',
    'TEXT-B-FAST': 'BreakFast',
    'TEXT-BRUNCH': 'Brunch',
    'TEXT-LUNCH': 'Lunch',
    'TEXT-SANDWICH': 'Sandwich',
    'TEXT-SOUP': 'Soup',
    'TEXT-SALAD': 'Salad',
    'TEXT-SIDES': 'Sides',
    'TEXT-DINNER': 'Dinner',
    'TEXT-MONSOON': 'Monsoon',
    'TEXT-SPRING': 'Spring',
    'TEXT-WINTER': 'Winter',
    'TEXT-SUMMER': 'Summer',
    'TEXT-FALL': 'Fall',
    'TEXT-EASY': 'Easy',
    'TEXT-MEDIUM': 'Medium',
    'TEXT-HARD': 'Hard',
    'TEXT-ShortTAGS':'Select tags that help search your recipe , you can select multiple tags upto 6',
    'TEXT-ErrTAGS':'Tags is a required field , the maximum tags that could be selected is 6',
    'TEXT-SERVSIZE': 'Serving Size',
    'TEXT-ShortSERVSIZE': 'eg. 5',
    'TEXT-ErrSERVSIZE': 'The Serving Size is required and should be less than 10 characters',
    'TEXT-PREPTIME': 'Prep Time',
    'TEXT-ShortPREPTIME': 'eg. 30 min',
    'TEXT-ErrPREPTIME': 'The Prep Time is required and should be less than 10 characters',
    'TEXT-TOTALTIME': 'Total Time',
    'TEXT-ShortTOTALTIME': 'eg. 55 min',
    'TEXT-ErrTOTALTIME': 'The Total Time is required and should be less than 10 characters',
    'TEXT-ShortIMAGE': 'Click on the camera icon to choose your pic from the Wix Media Library . The ideal size of your image should be greater than (500 X 500)px and square in size.Note:- You should be able to upload , crop & edit your pics in Wix media library.',
    'TEXT-COMPO': 'Ingredients ( Add Component',
    'TEXT-ShortCOMPO': 'Enter the components for your recipe eg. Main Dish , Sauce , Marinade , Icing ,Filling & then ingredient list for each of these components eg. 10 grams oil , 5 eggs',
    'TEXT-COMPONAME': 'Component Name',
    'TEXT-ErrCOMPONAME': 'The component name is required and should be less than 50 characters',
    'TEXT-INGRE': 'Ingredient List ( Add ',
    'TEXT-ErrINGRE': 'The ingredient name is required and should be less than 50 characters',
    'TEXT-DIREC': 'Directions ( Add',
    'TEXT-ShortDIREC': 'Enter step by step directions for your recipe',
    'TEXT-ErrDIREC': 'The Direction is required field',
    'TEXT-EXPERTTIPS': 'Expert Tips ( Add',
    'TEXT-ShortEXPERTTIPS': 'Enter expert tips for your recipe',

    'TEXT-MAIN': 'Main',
    'BUTTON-MANAGERECIPES': 'Manage Recipes',
    "TEXT-RECIPESETT1": "This is the Recipe App settings panel.",
    "TEXT-RECIPESETT2": "Add delicious recipes to your site & make it easy for users to find them.",
    "TEXT-RECIPESETT3": "Upgrade to show unlimited recipes on your site.",
    "TEXT-SETTINGS": "Settings",
    "TEXT-RECIPEPAGE": "Single Recipe",
    "TEXT-SEARCHBOX": "Search Bar",
    "TEXT-SEARCHDROPDOWNS": "Dropdown menu",
    "TEXT-SOCIALSHAREICONS": "Social icons",
    "TEXT-RECIPEDETAILPAGE": "Recipe Detail Page",
    "TEXT-DESIGN": "Design",
  

    "TEXT-BACKGROUNDCOLORANDOPACITY": "Opacity & Color",
    "TEXT-BBACKGROUNDCOLORANDOPACITY": "Background opacity & color",
    "TEXT-FIELDCOLORANDOPACITY": "Bar opacity & color",
    "TEXT-PAGEBACKGROUNDCOLORANDOPACITY": "Background opacity & color",
    "TEXT-FONTANDTEXTCOLOR": "Text style & color",
    "TEXT-TLFONTANDTEXTCOLOR": "Tag Label",
    "TEXT-RTFONTANDTEXTCOLOR": "Recipe name",
    "TEXT-DESCFONTANDTEXTCOLOR": "Description title font and text color",
    "TEXT-CHOOSEPAGE": "Select your App main view:",
    "TEXT-SEARCHRECIPES": "All Recipes",
    "TEXT-CHOOSEELEMENTS": "Select elements to show:",
    "TEXT-CHOOSEPAGELAYOUT": "Choose Page Layout",
    "TEXT-BLOCK": "Grid",
    "TEXT-LIST": "List",
    "TEXT-GENBACK": "Customize Background",
    "TEXT-BOXES": "Boxes",
    "TEXT-SEARCHBOXDESIGN": "Search Bar",
    "TEXT-FILTERBOXDESIGN": "Dropdown Menu",
    "TEXT-GENERALRBD": "General",
    "TEXT-TAGSDESIGN": "Tags",
    "TEXT-BACKBUTTON": "Back Button",
    "TEXT-ICONCOLOR": "Icon Color",
    "TEXT-GENERAL": "General",
    "TEXT-RECIPECARDDESIGN": "Recipe Card",
    "TEXT-SECTIONS": "Customize Sections",
    "TEXT-SERVSIZEANDTIME": "Serving Info",
    "TEXT-BADGE": "Badge",
    "TEXT-TAGLABEL": "Tag label",
    "TEXT-PANELTITLES": "Subtitles",
    "TEXT-RECIPECOMPTITLES": "Recipe Section Titles",
    "TEXT-INGRELISTS": "Ingredient Lists",
    "TEXT-DESCSECTION": "Description",
    "TEXT-PANELDETAILS": "Panel Details",
    "TEXT-FILTERBOX": "Dropdown menu",
    "TEXT-RECIPEBOX": "Recipe card",

    "TEXT-NUTRISECTION": "Nutritional Facts",
    "TEXT-NUTRIFACTS": "Nutritional facts",
    "TEXT-AMOUNT": "Amount per Serving",
    "TEXT-CALORIES": "Calories",
    "TEXT-ECALORIES": "Enter total calories for the recipe",
    "TEXT-ShortCALORIES": "eg. 200",
    "TEXT-ErrCALORIES": "The calories field is optional and should be less than 10 characters",
    "TEXT-FAT": "Fat",
    "TEXT-EFAT": "Enter fat content",
    "TEXT-ShortFAT": "eg. 14gms or 20%",
    "TEXT-ErrFAT": "The fat field is optional and should be less than 10 characters",
    "TEXT-CARBO": "Carbohydrate",
    "TEXT-ECARBO": "Enter carbohydrate content",
    "TEXT-ShortCARBO": "eg. 25gms or 70%",
    "TEXT-ErrCARBO": "The carbohydrate field is optional and should be less than 10 characters",
    "TEXT-PROTIEN": "Protein",
    "TEXT-EPROTIEN": "Enter protein content",
    "TEXT-ShortPROTIEN": "eg. 10gms or 10%",
    "TEXT-ErrPROTIEN": "The protein field is optional and should be less than 10 characters",
    "TEXT-DISCLAIMER": "Disclaimer",
    "TEXT-EDISCLAIMER": "Enter nutritional disclaimer",
    "TEXT-ShortDISCLAIMER": "eg. Notice: Eating the right diet for your goals may result in increased gains and decreased bodyfat.",
    "TEXT-ErrDISCLAIMER": "The disclaimer field is optional and should be less than 150 characters",
    "TEXT-TAGSANDTIMES": "Tags and Times",
    "TEXT-ErrRECIPENAME2": "Recipe Name already in use",
    "TEXT-SERVINGSPRECIPE" : "Servings Per Recipe",
    "TEXT-AMOUNTPSERVING": "amount per serving",
    "TEXT-NUTSERV": "Serving Size , Calories , Etc.",
    "TEXT-NOTICETEXT": "Dietary info text",



    "TEXT-SOCIALICONSCOLOR": "Social Icons",
    "TEXT-SUPPORT": "Support",
    "TEXT-DEVELOPERINFO": "Developer Info",
    "TEXT-REVIEWTHEAPP": "Review the App",
    "TEXT-REVIEWPARA": "Have you enjoyed the app? Spread the word and rate us in the app market",
    "BUTTON-RATEUS": "Rate Us",
    "TEXT-BY": "By"

    });

    $translateProvider.translations('pt', {
    "BUTTON-CONTACTUS": "Contacte-Nos",
    "BUTTON-UPGRADE": "Atualizar",
    "BUTTON-UPGRADENOW": "Atualize Agora",
    "BUTTON-GOTO": "Vá A",
    "BUTTON-SAVECHANGES": "Salvar Mudanças",
    "BUTTON-DRAFTS": "Drafts",
    "BUTTON-ADDARECIPE": "Adicione uma Receita",
    "BUTTON-BACK": "Para Trás",
    "BUTTON-NEXT": "Seguinte",
    "BUTTON-DELETERECIPE": "Receita da supressão",
    "BUTTON-SAVERECIPE": "Salvar Receita",
    "BUTTON-SAVERECIPETODRAFTS": "Salvar Receita Drafts",
    "BUTTON-SUBMITRECIPE": "Submeta Receita",
    "BUTTON-CREATERECIPE": "Crie Receita",
    "TEXT-WELCOME": "Dê boas-vindas às receitas App!",
    "TEXT-WELCOME2": "Para obter começado, adicione sua primeira receita.",
    "TEXT-INTRO": "Introdução",
    "TEXT-GENERALINFO": "Informação geral",
    "TEXT-IMAGE": "Imagem",
    "TEXT-INGREDIENTS": "Ingredientes",
    "TEXT-DIRECTIONS": "Instruções",
    "TEXT-TIPS": "Perito Pontas",
    "TEXT-RECIPENAME": "Recieta Nome",
    "TEXT-ShortRECIPENAME": "Incorpore um título curto para sua galinha Tikka Masala da receita por exemplo",
    "TEXT-ErrRECIPENAME": "O nome da receita é exido e deve ser menos de 50 caráteres",
    "TEXT-DESC": "Descrição",
    "TEXT-ShortDESC": "Incorpore uma descrição sucinta para sua receita",
    "TEXT-ErrDESC": "A descrição é exigida e deve ser menos de 500 caráteres",
    "TEXT-TAGS": "Etiquetes",
    "TEXT-SHRIMP": "Camarão",
    "TEXT-CHICKEN": "Galinha",
    "TEXT-EGG": "Ovo",
    "TEXT-FISH": "Peixes",
    "TEXT-BEEF": "Carne de Vaca",
    "TEXT-OFFAL": "Miudezas",
    "TEXT-DUCK": "Pato",
    "TEXT-PORK": "Carne de porco",
    "TEXT-SCALLOPS": "Vieiras",
    "TEXT-TURKEY": "Turquia",
    "TEXT-PASTA": "Massas alimentícias",
    "TEXT-RABBIT": "Coelho",
    "TEXT-RICE": "Arroz",
    'TEXT-SALMON': 'Salmon',
    'TEXT-TROUT': 'Trout',
    'TEXT-MACKEREL': 'Mackerel',
    'TEXT-SARDINES': 'Sardines',
    'TEXT-COD': 'Cod',
    'TEXT-POLLOCK': 'Pollock',
    'TEXT-HAKE': 'Hake',
    'TEXT-GREYMULLET': 'Grey Mullet',
    'TEXT-LOBSTER': 'Lobster',
    'TEXT-SCALLOPS': 'Scallops',
    'TEXT-MUSSELS': 'Mussels',
    'TEXT-CLAMS': 'Clams',
    "TEXT-LAMB": "Cordeiro",
    "TEXT-AMERICAN": "American",
    "TEXT-JAPANESE": "Japonês",
    "TEXT-INDIAN": "Índia",
    "TEXT-CHINESE": "Chinês",
    "TEXT-AFRICAN": "África",
    "TEXT-ASIAN": "Asiático",
    "TEXT-MIDDLEEASTERN": "Médio Oriente",
    "TEXT-GERMAN": "Alemão",
    "TEXT-GREEK": "Grego",
    "TEXT-ITALIAN": "Italiano",
    "TEXT-MEXICAN": "Mexicano",
    "TEXT-THAI": "Tailandês",
    "TEXT-CARRIBEAN": "Das Caraíbas",
    "TEXT-ENGLISH-SCOTTISH": "English-Scottish",
    "TEXT-FRENCH": "Francês",
    "TEXT-GLUTENFREE": "Livre de glúten",
    "TEXT-INDONESIAN": "Indonésia",
    "TEXT-VEGAN": "Vegan",
    "TEXT-VEGETARIAN": "Vegetarianos",
    "TEXT-APPETIZER": "Aperitivo",
    "TEXT-ENTREE": "Entree",
    "TEXT-BREAD": "Pão",
    "TEXT-DESSERT": "Sobremesa",
    "TEXT-COCKTAIL": "Cocktail",
    "TEXT-NONALCOHOLICBEVERAGES": "Bebidas Non-Alcoholic",
    "TEXT-B-FAST": "Peqeuno-AlmoÇo",
    "TEXT-BRUNCH": "Brunch",
    "TEXT-LUNCH": "Almoço",
    "TEXT-SANDWICH": "Sandwich",
    "TEXT-SOUP": "Sopa",
    "TEXT-SALAD": "Salada",
    "TEXT-SIDES": "Os lados",
    "TEXT-DINNER": "Jantar",
    "TEXT-MONSOON": "Monção",
    "TEXT-SPRING": "Mola",
    "TEXT-WINTER": "Inverno",
    "TEXT-SUMMER": "Verão",
    "TEXT-FALL": "Queda",
    "TEXT-EASY": "Fácil",
    "TEXT-MEDIUM": "Médio",
    "TEXT-HARD": "Disco",
    "TEXT-ShortTAGS":"Selecione as tags que ajude a procurar a sua receita , você pode selecionar várias tags até 6",
    "TEXT-ErrTAGS":"Tags é um campo obrigatório , o máximo de tags que poderia ser selecionado é 6",
    "TEXT-SERVSIZE": "Servindo Tamanho",
    "TEXT-ShortSERVSIZE": "Por exemplo 5",
    "TEXT-ErrSERVSIZE": "O que serve o tamanho é necessária e deve ser menos de dez caracteress",
    "TEXT-PREPTIME": "Tempo de preparação",
    "TEXT-ShortPREPTIME": "Por exemplo 30 min",
    "TEXT-ErrPREPTIME": "O tempo de preparação é necessária e deve ser menos de 10 caracteres",
    "TEXT-TOTALTIME": "Tempo Total",
    "TEXT-ShortTOTALTIME": "Por exemplo 55 min",
    "TEXT-ErrTOTALTIME": "O tempo total é necessária e deve ser menos de 10 caracteres",
    "TEXT-ShortIMAGE": "Clique no ícone da câmara para escolher o seu pic da Wix Biblioteca de Mídia . O tamanho ideal da imagem deve ser maior do que (500 X 500)px e praça em tamanho.Nota:- Você deve ser capaz de carregar , recortar e editar as suas fotos no Wix biblioteca de mídia.",
    "TEXT-COMPO": "Ingredientes ( Adicionar Componente",
    "TEXT-ShortCOMPO": "Insira os componentes para a sua receita eg. Prato principal , Molho , Marinada , Degelo ,Enchimento & então ingrediente lista para cada um destes componentes eg. Dez gramas de óleo , 5 ovos",
    "TEXT-COMPONAME": "Componente Nome",
    "TEXT-ErrCOMPONAME": "O nome do componente é necessária e deve ser menos de 50 caracteres",
    "TEXT-INGRE": "Ingrediente Lista ( Adicionar ",
    "TEXT-ErrINGRE": "Nome do ingrediente é necessária e deve ser menos de 50 caracteres",
    "TEXT-DIREC": "Direcções ( Adicionar",
    "TEXT-ShortDIREC": "Digite instruções passo a passo para a sua receita",
    "TEXT-ErrDIREC": "A direcção é um campo requerido",
    "TEXT-EXPERTTIPS": "Especialistas Dicas ( Adicionar",
    "TEXT-ShortEXPERTTIPS": "Insira dicas de especialistas para a sua receita",
    "TEXT-MAIN": "Principais",
    "BUTTON-MANAGERECIPES": "Gerenciar Receitas",
    "TEXT-RECIPESETT1": "Esta é a receita do painel Configurações de aplicativos.",
    "TEXT-RECIPESETT2": "Mostre receitas em seu Web site em um projeto bonito e facilmente searchable.",
    "TEXT-RECIPESETT3": "Atualize para criar e exibir receitas ilimitadas",
    "TEXT-SETTINGS": "Definições",
    "TEXT-RECIPEPAGE": "Receita Página",
    "TEXT-SEARCHBOX": "Pesquisa Caixa",
    "TEXT-SEARCHDROPDOWNS": "Pesquisa Menus suspensos",
    "TEXT-SOCIALSHAREICONS": "Social Quota Ícones",
    "TEXT-RECIPEDETAILPAGE": "Receita Detalhes Página",
    "TEXT-DESIGN": "Design",
    
    "TEXT-BACKGROUNDCOLORANDOPACITY": "Fundo",
    "TEXT-FIELDCOLORANDOPACITY": "Cor do campo e opacidade",
    "TEXT-PAGEBACKGROUNDCOLORANDOPACITY": "Cor de fundo da página e a opacidade",
    "TEXT-FONTANDTEXTCOLOR": "Texto",
    "TEXT-TLFONTANDTEXTCOLOR": "Etiqueta de fonte e cor de texto",
    "TEXT-RTFONTANDTEXTCOLOR": "Fonte do título de receita e cor de texto",
    "TEXT-DESCFONTANDTEXTCOLOR": "Descrição Fonte do Título e cor de texto",
    "TEXT-CHOOSEPAGE": "Escolha a página para exibir",
    "TEXT-SEARCHRECIPES": "Receitas de pesquisa",
    "TEXT-CHOOSEELEMENTS": "Ocultar ou mostrar elementos",
    "TEXT-CHOOSEPAGELAYOUT": "Escolher página layout",
    "TEXT-BLOCK": "Bloco",
    "TEXT-LIST": "Lista",
    "TEXT-GENBACK": "Fundo geral",
    "TEXT-BOXES": "Caixas",
    "TEXT-SEARCHBOXDESIGN": "Pesquisa Caixa design",
    "TEXT-FILTERBOXDESIGN": "Filtro Caixa",
    "TEXT-GENERALRBD": "Geral Receitas Caixa Design",
    "TEXT-TAGSDESIGN": "Tags Design",
    "TEXT-BACKBUTTON": "Botão Voltar",
    "TEXT-ICONCOLOR": "Ícon Cor",
    "TEXT-GENERAL": "Geral",
    "TEXT-SECTIONS": "Seções",
    "TEXT-SERVSIZEANDTIME": "Servindo Tamanho e tempo",
    "TEXT-BADGE": "Crachá",
    "TEXT-TAGLABEL": "Etiqueta Rótulo",
    "TEXT-PANELTITLES": "Títulos de painel",
    "TEXT-RECIPECOMPTITLES": "Receita Componente Títulos",
    "TEXT-INGRELISTS": "Listas de ingredientes",
    "TEXT-DESCSECTION": "Seção de descrição",
    "TEXT-PANELDETAILS": "Detalhes do painel",
    "TEXT-FILTERBOX": "Filtro Caixa",
    "TEXT-RECIPEBOX": "Receita Caixa",
    
    "TEXT-SOCIALICONSCOLOR": "Social Ícones Cor",
    "TEXT-SUPPORT": "Apoio",
    "TEXT-DEVELOPERINFO": "Informações de desenvolvedores",
    "TEXT-REVIEWTHEAPP": "Revisão do aplicativo",
    "TEXT-REVIEWPARA": "Você gozou da App? Espalhar a palavra e a taxa de us no mercado app",
    "BUTTON-RATEUS": "Taxa Us",
    "TEXT-ENTERSEARCH": "Insira um termo de pesquisa para encontrar a sua receita",
    "TEXT-MAININGRE": "Ingrediente principal",
    "TEXT-CUISINE": "Cozinha",
    "TEXT-COURSE": "Curso",
    "TEXT-SEASON": "Temporada",
    "TEXT-TIME": "Tempo",
    "TEXT-DIFFICULTY": "Dificuldade",
    "TEXT-NONE": "Nenhum",
    "TEXT-FILTERRECIPES": "Filtro Receitas",
    "TEXT-HIDERECIPES": "Ocultar Receitas",
    "TEXT-ERECIPENAME": "Digite o nome da receita",
    "TEXT-EDESC": "Digite a descrição da receita",
    "TEXT-ESERVSIZE": "Digite o tamanho do Serviço",
    "TEXT-EPREPTIME": "Introduza o tempo de preparação",
    "TEXT-ETOTALTIME": "Introduza o Tempo Total",
    "TEXT-ECOMPNAME": "Introduzir nome do componente eg. Prato principal,Molho,marinar",
    "TEXT-EINGRE": "Digite um ingrediente",
    "TEXT-EDIREC": "Digite passo a passo a Direção",
    "TEXT-ETIP": "Insira a ponta de peritos",

    "TEXT-NUTRISECTION": "Nutricional Seção",
    "TEXT-NUTRIFACTS": "Fatos Nutricionais",
    "TEXT-AMOUNT": "Quantidade por porção",
    "TEXT-CALORIES": "Calorias",
    "TEXT-ECALORIES": "Insira calorias totais para a receita",
    "TEXT-ShortCALORIES": "por exemplo. 200",
    "TEXT-ErrCALORIES": "O campo de calorias é opcional e deve ter menos de 10 caracteres",
    "TEXT-FAT": "Gordo",
    "TEXT-EFAT": "Insira o conteúdo de gordura",
    "TEXT-ShortFAT": "por exemplo. 14gms ou 20%",
    "TEXT-ErrFAT": "O campo de gordura é opcional e deve ser menor que 10 caracteres",
    "TEXT-CARBO": "Carboidrato",
    "TEXT-ECARBO": "Insira o conteúdo de carboidratos",
    "TEXT-ShortCARBO": "por exemplo. 25gms ou 70%",
    "TEXT-ErrCARBO": "O campo de carboidratos é opcional e deve ter menos de 10 caracteres",
    "TEXT-PROTIEN": "Proteína",
    "TEXT-EPROTIEN": "Insira o conteúdo do proteína",
    "TEXT-ShortPROTIEN": "por exemplo. 10gms ou 10%",
    "TEXT-ErrPROTIEN": "O campo de proteína é opcional e deve ser menor que 10 caracteres",
    "TEXT-DISCLAIMER": "Desaprovador",
    "TEXT-EDISCLAIMER": "Introduza aviso de isenção nutricional",
    "TEXT-ShortDISCLAIMER": "por exemplo. Aviso: Comer a dieta certa para seus objetivos pode resultar em ganhos aumentados e diminuiu bodyfat.",
    "TEXT-ErrDISCLAIMER": "O campo de isenção de responsabilidade é opcional e deve ter menos de 150 caracteres",
    "TEXT-TAGSANDTIMES": "Tags e Times",
    "TEXT-ErrRECIPENAME2": "Nome da receita já em uso",
    "TEXT-SERVINGSPRECIPE" : "Porções por receita",
    "TEXT-AMOUNTPSERVING": "quantidade por porção",
    "TEXT-NUTSERV": "Tamanho da dose, calorias, etc.",
    "TEXT-NOTICETEXT": "Texto do aviso",

    "TEXT-BY": "Por"
    });
 
    $translateProvider.translations('es', {
    "BUTTON-CONTACTUS": "Contáctenos",
    "BUTTON-UPGRADE": "Mejorar",
    "BUTTON-UPGRADENOW": "Mejorar Ahora",
    "BUTTON-GOTO": "Ir a",
    "BUTTON-SAVECHANGES": "Guardar cambios",
    "BUTTON-DRAFTS": "Borradores",
    "BUTTON-ADDARECIPE": "Añadir una Receta",
    "BUTTON-BACK": "Volver",
    "BUTTON-NEXT": "Siguiente",
    "BUTTON-DELETERECIPE": "Eliminar receta",
    "BUTTON-SAVERECIPE": "Guardar receta",
    "BUTTON-SAVERECIPETODRAFTS": "Guardar receta a borradores",
    "BUTTON-SUBMITRECIPE": "Enviar Receta",
    "BUTTON-CREATERECIPE": "Crear Recetas",
    "TEXT-WELCOME": "Bienvenido a las recetas App!",
    "TEXT-WELCOME2": "Para empezar , añada su primera receta.",
    "TEXT-INTRO": "Entrada",
    "TEXT-GENERALINFO": "Info General",
    "TEXT-IMAGE": "Imagen",
    "TEXT-INGREDIENTS": "Ingredientes",
    "TEXT-DIRECTIONS": "Instrucciones",
    "TEXT-TIPS": "Consejos de expertos",
    "TEXT-RECIPENAME": "Nombre de Receta",
    "TEXT-ShortRECIPENAME": "Entre en un título corto para su receta p. ej. Chicken Tikka Masala",
    "TEXT-ErrRECIPENAME": "El nombre de la receta se requiere y debería ser menos de 50 caracteres",
    "TEXT-DESC": "Descripción",
    "TEXT-ShortDESC": "Entre en una descripción corta para su receta",
    "TEXT-ErrDESC": "La descripción se requiere y debería ser menos de 500 caracteres",
    "TEXT-TAGS": "Etiquetas",
    "TEXT-SHRIMP": "Camarón",
    "TEXT-CHICKEN": "Pollo",
    "TEXT-EGG": "Huevo",
    "TEXT-FISH": "Pescado",
    "TEXT-BEEF": "Carne de vaca",
    "TEXT-OFFAL": "Offal",
    "TEXT-DUCK": "Pato",
    "TEXT-PORK": "Cerdo",
    "TEXT-SCALLOPS": "Vieira",
    "TEXT-TURKEY": "Pavo",
    "TEXT-PASTA": "Pasta",
    "TEXT-RABBIT": "Conejo",
    "TEXT-RICE": "Arroz",
    'TEXT-SALMON': 'Salmon',
    'TEXT-TROUT': 'Trout',
    'TEXT-MACKEREL': 'Mackerel',
    'TEXT-SARDINES': 'Sardines',
    'TEXT-COD': 'Cod',
    'TEXT-POLLOCK': 'Pollock',
    'TEXT-HAKE': 'Hake',
    'TEXT-GREYMULLET': 'Grey Mullet',
    'TEXT-LOBSTER': 'Lobster',
    'TEXT-SCALLOPS': 'Scallops',
    'TEXT-MUSSELS': 'Mussels',
    'TEXT-CLAMS': 'Clams',
    "TEXT-LAMB": "Cordero",
    "TEXT-AMERICAN": "Americano",
    "TEXT-JAPANESE": "Japonés",
    "TEXT-INDIAN": "Indio",
    "TEXT-CHINESE": "Chino",
    "TEXT-AFRICAN": "Africano",
    "TEXT-ASIAN": "Asiático",
    "TEXT-MIDDLEEASTERN": "Middle Eastern",
    "TEXT-GERMAN": "Alemán",
    "TEXT-GREEK": "Griego",
    "TEXT-ITALIAN": "Italiano",
    "TEXT-MEXICAN": "Mexicano",
    "TEXT-THAI": "Tailandés",
    "TEXT-CARRIBEAN": "Carribean",
    "TEXT-ENGLISH-SCOTTISH": "English-Scottish",
    "TEXT-FRENCH": "Francés",
    "TEXT-GLUTENFREE": "Sin Gluten",
    "TEXT-INDONESIAN": "Indonesio",
    "TEXT-VEGAN": "Vegano",
    "TEXT-VEGETARIAN": "Vegetariano",
    "TEXT-APPETIZER": "Aperitivo",
    "TEXT-ENTREE": "Entree",
    "TEXT-BREAD": "Pan",
    "TEXT-DESSERT": "Postre",
    "TEXT-COCKTAIL": "Cóctel",
    "TEXT-NONALCOHOLICBEVERAGES": "Bebidas no alcohólicas",
    "TEXT-B-FAST": "Desayuno",
    "TEXT-BRUNCH": "Brunch",
    "TEXT-LUNCH": "Almuerzo",
    "TEXT-SANDWICH": "Sándwich",
    "TEXT-SOUP": "Sopa",
    "TEXT-SALAD": "Ensalada",
    "TEXT-SIDES": "Sides",
    "TEXT-DINNER": "Cena",
    "TEXT-MONSOON": "Monzón",
    "TEXT-SPRING": "Primavera",
    "TEXT-WINTER": "Invierno",
    "TEXT-SUMMER": "Verano",
    "TEXT-FALL": "Otoño",
    "TEXT-EASY": "Fácil",
    "TEXT-MEDIUM": "Medio",
    "TEXT-HARD": "Duro",
    "TEXT-ShortTAGS":"Seleccione etiquetas que ayudan a buscar su receta, puede seleccionar upto 6 de etiquetas múltiple",
    "TEXT-ErrTAGS":"Las etiquetas es un campo requerido , el número máximo de etiquetas que puedan ser seleccionados es 6",
    "TEXT-SERVSIZE": "Tamaño de porción",
    "TEXT-ShortSERVSIZE": "p.ej. 5",
    "TEXT-ErrSERVSIZE": "El tamaño de porción es necesario y debe ser menos de 10 caracteres",
    "TEXT-PREPTIME": "Tiempo de preparación",
    "TEXT-ShortPREPTIME": "p.ej. 30 min",
    "TEXT-ErrPREPTIME": "El tiempo de preparación es necesario y debe ser menos de 10 caracteres",
    "TEXT-TOTALTIME": "Tiempo total",
    "TEXT-ShortTOTALTIME": "p.ej. 55 min",
    "TEXT-ErrTOTALTIME": "El tiempo Total es necesario y debe ser menos de 10 caracteres",
    "TEXT-ShortIMAGE": "Haga clic en el icono de la cámara para elegir tu foto de la biblioteca de los medios de comunicación de Wix . La talla ideal de su imagen debería ser mayor que (500 X 500) px y cuadrado en la talla . Nota:-debería poder cargar, recortar y editar tus fotos en biblioteca multimedia de Wix.",
    "TEXT-COMPO": "Ingredientes (añaden componente",
    "TEXT-ShortCOMPO": "Entre en los componentes para su receta eg. El Plato principal, Salsa & entonces el ingrediente ponen en una lista para cada uno de estos componentes eg. 10 gramos de petróleo, 5 huevos",
    "TEXT-COMPONAME": "Nombre componente",
    "TEXT-ErrCOMPONAME": "El nombre componente se requiere y debería ser menos de 50 caracteres",
    "TEXT-INGRE": "Lista del ingrediente (añaden ",
    "TEXT-ErrINGRE": "El nombre del ingrediente se requiere y debería ser menos de 50 caracteres",
    "TEXT-DIREC": "Instrucciones ( añaden",
    "TEXT-ShortDIREC": "Introduzca paso a paso instrucciones para tu receta",
    "TEXT-ErrDIREC": "La instruccion es un campo obligatorio",
    "TEXT-EXPERTTIPS": "Consejos de expertos ( añaden",
    "TEXT-ShortEXPERTTIPS": "Introduzca los consejos de los expertos para tu receta",

    "BUTTON-MANAGERECIPES": "Maneje Recetas",
    "TEXT-MAIN": "Principal",
    "TEXT-RECIPESETT1": "Esta es la Receta App panel de ajustes.",
    "TEXT-RECIPESETT2": "Mostrar recetas en su sitio web en un diseño hermoso y fácil de buscar.",
    "TEXT-RECIPESETT3": "Actualizar para crear y mostrar recetas ilimitadas",
    "TEXT-SETTINGS": "Ajustes",
    "TEXT-RECIPEPAGE": "Receta página",
    "TEXT-SEARCHBOX": "Cuadro de búsqueda",
    "TEXT-SEARCHDROPDOWNS": "Busque Dropdowns",
    "TEXT-SOCIALSHAREICONS": "Sociales compartir iconos",
    "TEXT-RECIPEDETAILPAGE": "Página del detalle de la receta",
    "TEXT-DESIGN": "Diseño",

    "TEXT-BACKGROUNDCOLORANDOPACITY": "Fondo",
    "TEXT-FIELDCOLORANDOPACITY": "Campo color y opacidad",
    "TEXT-PAGEBACKGROUNDCOLORANDOPACITY": "Color del Fondo de la página y opacidad",
    "TEXT-FONTANDTEXTCOLOR": "Text",
    "TEXT-TLFONTANDTEXTCOLOR": "Fuente de la Etiqueta de etiqueta y color del texto",
    "TEXT-RTFONTANDTEXTCOLOR": "Receta Fuente de título y el color del texto",
    "TEXT-DESCFONTANDTEXTCOLOR": "Descripción Título Color de fuente y texto",
    "TEXT-CHOOSEPAGE": "Elija página para mostrar",
    "TEXT-SEARCHRECIPES": "Busque recetas",
    "TEXT-CHOOSEELEMENTS": "Ocultar o mostrar elementos",
    "TEXT-CHOOSEPAGELAYOUT": "Elegir página diseño",
    "TEXT-BLOCK": "Bloque",
    "TEXT-LIST": "Lista",
    "TEXT-GENBACK": "Antecedentes generales",
    "TEXT-BOXES": "Cajas",
    "TEXT-SEARCHBOXDESIGN": "Cuadro de búsqueda Design",
    "TEXT-FILTERBOXDESIGN": "Filtro caja",
    "TEXT-GENERALRBD": "Generales Receta caja diseño",
    "TEXT-TAGSDESIGN": "Etiquetas diseño",
    "TEXT-BACKBUTTON": "Botón Atrás",
    "TEXT-ICONCOLOR": "icon Color",
    "TEXT-GENERAL": "General",
    "TEXT-SECTIONS": "Sección",
    "TEXT-SERVSIZEANDTIME": "Tamaño de la porción y tiempo",
    "TEXT-BADGE": "Insignia",
    "TEXT-TAGLABEL": "Etiqueta de etiqueta",
    "TEXT-PANELTITLES": "Títulos del panel",
    "TEXT-RECIPECOMPTITLES": "Receta componente títulos",
    "TEXT-INGRELISTS": "Listas del ingrediente",
    "TEXT-DESCSECTION": "Sección Descripción",
    "TEXT-PANELDETAILS": "Detalles del panel",
    "TEXT-FILTERBOX": "Caja de filtro",
    "TEXT-RECIPEBOX": "Caja de la receta",


    "TEXT-SOCIALICONSCOLOR": "Color de iconos social",
    "TEXT-SUPPORT": "Apoyar",
    "TEXT-DEVELOPERINFO": "Información del programador",
    "TEXT-REVIEWTHEAPP": "Revisar la App",
    "TEXT-REVIEWPARA": "¿Has disfrutado de la aplicación? Difundir la palabra y tasa de nosotros en la  mercado app",
    "BUTTON-RATEUS": "Tasa nosotros",

    "TEXT-NUTRISECTION": "Nutricional Sección",
    "TEXT-NUTRIFACTS": "Información Nutricional",
    "TEXT-AMOUNT": "Cantidad por porcion",
    "TEXT-CALORIES": "Calorías",
    "TEXT-ECALORIES": "Introduzca las calorías totales para la receta",
    "TEXT-ShortCALORIES": "p.ej. 200",
    "TEXT-ErrCALORIES": "El campo de calorías es opcional y debe tener menos de 10 caracteres",
    "TEXT-FAT": "Grasa",
    "TEXT-EFAT": "Introduzca el contenido de grasa",
    "TEXT-ShortFAT": "p.ej. 14gms o 20%",
    "TEXT-ErrFAT": "El campo de grasa es opcional y debe tener menos de 10 caracteres",
    "TEXT-CARBO": "Carbohidrato",
    "TEXT-ECARBO": "Introduzca el contenido de carbohidratos",
    "TEXT-ShortCARBO": "p.ej. 25gms o 70%",
    "TEXT-ErrCARBO": "El campo de carbohidratos es opcional y debe tener menos de 10 caracteres",
    "TEXT-PROTIEN": "Proteína",
    "TEXT-EPROTIEN": "Introduzca el contenido de proteína",
    "TEXT-ShortPROTIEN": "p.ej. 10gms o 10%",
    "TEXT-ErrPROTIEN": "El campo de la proteína es opcional y debe ser menos de 10 caracteres",
    "TEXT-DISCLAIMER": "Negante",
    "TEXT-EDISCLAIMER": "Ingreso de responsabilidad nutricional",
    "TEXT-ShortDISCLAIMER": "p.ej. Aviso: Comer la dieta adecuada para sus objetivos puede resultar en aumento de las ganancias y disminución de la grasa corporal.",
    "TEXT-ErrDISCLAIMER": "El campo de renuncia es opcional y debe tener menos de 150 caracteres",
    "TEXT-TAGSANDTIMES": "Etiquetas y tiempos",
    "TEXT-ErrRECIPENAME2": "Nombre de receta ya en uso",
    "TEXT-SERVINGSPRECIPE" : "Porciones por receta",
    "TEXT-AMOUNTPSERVING": "cantidad por porcion",
    "TEXT-NUTSERV": "Tamaño de la porción, calorías, Etc.",
    "TEXT-NOTICETEXT": "Texto del aviso",

    "TEXT-BY": "Por"



    });

$translateProvider.translations('fr', {
     "BUTTON-CONTACTUS": "Contactez-Nous",
    "BUTTON-UPGRADE": "Mettre à Niveau",
    "BUTTON-UPGRADENOW": "Mettre à jour maintenant",
    "BUTTON-GOTO": "Aller Au",
    "BUTTON-SAVECHANGES": "Enregistrer les modifications",
    "BUTTON-DRAFTS": "Les brouillons",
    "BUTTON-ADDARECIPE": "Ajouter une Recette",
    "BUTTON-BACK": "Retour",
    "BUTTON-NEXT": "Next",
    "BUTTON-DELETERECIPE": "Supprimer Recette",
    "BUTTON-SAVERECIPE": "Enregistrer Recette",
    "BUTTON-SAVERECIPETODRAFTS": "Enregistrer Recette Brouillons",
    "BUTTON-SUBMITRECIPE": "Soumettre Recette",
    "BUTTON-CREATERECIPE": "Créer recette",
    "TEXT-WELCOME": "Bienvenue à l'application de recettes !",
    "TEXT-WELCOME2": "Pour commencer , ajouter votre première recette.",
    "TEXT-INTRO": "Intro",
    "TEXT-GENERALINFO": "Info générales",
    "TEXT-IMAGE": "Photo",
    "TEXT-INGREDIENTS": "Ingrédients",
    "TEXT-DIRECTIONS": "Instructions",
    "TEXT-TIPS": "Conseils d'experts",
    "TEXT-RECIPENAME": "Nom de la recette",
    "TEXT-ShortRECIPENAME": "Entrez un titre court de votre recette par exemple. Poulet Tikka masala",
    "TEXT-ErrRECIPENAME": "Le nom de la recette est obligatoire et doit comporter moins de 50 caractères.",
    "TEXT-DESC": "Description",
    "TEXT-ShortDESC": "Entrez une brève description de votre recette",
    "TEXT-ErrDESC": "La description est obligatoire et doit être inférieure à 500 caractères.",
    "TEXT-TAGS": "Tags",
    "TEXT-SHRIMP": "Les crevettes",
    "TEXT-CHICKEN": "Chicken",
    "TEXT-EGG": "Egg",
    "TEXT-FISH": "Poisson",
    "TEXT-BEEF": "Boeuf",
    "TEXT-OFFAL": "Abats",
    "TEXT-DUCK": "Duck",
    "TEXT-PORK": "Porc",
    "TEXT-SCALLOPS": "Les pétoncles",
    "TEXT-TURKEY": "La Turquie",
    "TEXT-PASTA": "Pasta",
    "TEXT-RABBIT": "Lapin",
    "TEXT-RICE": "Le riz",
    'TEXT-SALMON': 'Salmon',
    'TEXT-TROUT': 'Trout',
    'TEXT-MACKEREL': 'Mackerel',
    'TEXT-SARDINES': 'Sardines',
    'TEXT-COD': 'Cod',
    'TEXT-POLLOCK': 'Pollock',
    'TEXT-HAKE': 'Hake',
    'TEXT-GREYMULLET': 'Grey Mullet',
    'TEXT-LOBSTER': 'Lobster',
    'TEXT-SCALLOPS': 'Scallops',
    'TEXT-MUSSELS': 'Mussels',
    'TEXT-CLAMS': 'Clams',
    "TEXT-LAMB": "Lamb",
    "TEXT-AMERICAN": "American",
    "TEXT-JAPANESE": "Japanese",
    "TEXT-INDIAN": "Indian",
    "TEXT-CHINESE": "Chinese",
    "TEXT-AFRICAN": "African",
    "TEXT-ASIAN": "Asian",
    "TEXT-MIDDLEEASTERN": "Middle Eastern",
    "TEXT-GERMAN": "L'allemand",
    "TEXT-GREEK": "Greek",
    "TEXT-ITALIAN": "L'Italien",
    "TEXT-MEXICAN": "Mexican",
    "TEXT-THAI": "Thai",
    "TEXT-CARRIBEAN": "Caraïbes",
    "TEXT-ENGLISH-SCOTTISH": "English-Scottish",
    "TEXT-FRENCH": "Le Français",
    "TEXT-GLUTENFREE": "Gluten Free",
    "TEXT-INDONESIAN": "Indonesian",
    "TEXT-VEGAN": "Vegan",
    "TEXT-VEGETARIAN": "Végétarien",
    "TEXT-APPETIZER": "Apéritif",
    "TEXT-ENTREE": "Entrée",
    "TEXT-BREAD": "Pain",
    "TEXT-DESSERT": "Dessert",
    "TEXT-COCKTAIL": "Cocktail",
    "TEXT-NONALCOHOLICBEVERAGES": "Boissons non alcoolisées",
    "TEXT-B-FAST": "Le petit-déjeuner",
    "TEXT-BRUNCH": "Brunch",
    "TEXT-LUNCH": "Le déjeuner",
    "TEXT-SANDWICH": "Sandwich",
    "TEXT-SOUP": "Soup",
    "TEXT-SALAD": "Salad",
    "TEXT-SIDES": "Côtés",
    "TEXT-DINNER": "Le dîner",
    "TEXT-MONSOON": "Monsoon",
    "TEXT-SPRING": "Printemps",
    "TEXT-WINTER": "L'hiver",
    "TEXT-SUMMER": "L'été",
    "TEXT-FALL": "Automne",
    "TEXT-EASY": "Facile",
    "TEXT-MEDIUM": "Moyennes",
    "TEXT-HARD": "Difficile",
    "TEXT-ShortTAGS":"Sélectionnez les variables que vous pouvez aider votre recette , vous pouvez sélectionner plusieurs mots-clés jusqu'à 6",
    "TEXT-ErrTAGS":"Tags est un champ requis, le maximum de balises qui pourraient être sélectionnés est de 6",
    "TEXT-SERVSIZE": "La taille des portions",
    "TEXT-ShortSERVSIZE": "Par exemple. 5",
    "TEXT-ErrSERVSIZE": "La portion est obligatoire et doit comporter moins de 10 caractères",
    "TEXT-PREPTIME": "Temps de préparation",
    "TEXT-ShortPREPTIME": "Par exemple. 30 min",
    "TEXT-ErrPREPTIME": "Le temps de préparation est nécessaire et doit être inférieure à 10 caractères.",
    "TEXT-TOTALTIME": "Temps total",
    "TEXT-ShortTOTALTIME": "Par exemple. 55 min",
    "TEXT-ErrTOTALTIME": "Le temps total est nécessaire et doit être inférieure à 10 caractères.",
    "TEXT-ShortIMAGE": "Cliquez sur l'icône Appareil photo pour choisir votre pic à partir de la bibliothèque multimédia de Wix . La taille idéale de votre image doit être supérieur à (500 x 500 px) et carré de taille moyenne.Remarque : - vous devriez être en mesure de télécharger , crop & éditer vos images dans les médias de Wix bibliothèque.",
    "TEXT-COMPO": "Ajouter un composant ( Ingrédients",
    "TEXT-ShortCOMPO": "Dans les composants de votre recette par exemple. Plat Principal , Marinade , Sauce , Cerise , Remplissage et puis Liste des ingrédients pour chacune de ces composantes par exemple. 10 grammes , huile 5 oeufs",
    "TEXT-COMPONAME": "Nom du composant",
    "TEXT-ErrCOMPONAME": "Le nom du composant est requis et doit être inférieure à 50 caractères",
    "TEXT-INGRE": "Liste des ingrédients ( Ajouter ",
    "TEXT-ErrINGRE": "Le nom de l'ingrédient est nécessaire et doit être inférieure à 50 caractères",
    "TEXT-DIREC": "Directions ( Ajouter",
    "TEXT-ShortDIREC": "Saisir les directions étape par étape pour votre recette",
    "TEXT-ErrDIREC": "La Direction est un champ obligatoire",
    "TEXT-EXPERTTIPS": "Conseils d'experts ( Ajouter",
    "TEXT-ShortEXPERTTIPS": "Saisissez expert conseils pour votre recette",

    "TEXT-MAIN": "Main",
    "BUTTON-MANAGERECIPES": "Gérer les recettes",
    "TEXT-RECIPESETT1": "C'est la fiche App panneau Paramètres.",
    "TEXT-RECIPESETT2": "Recettes d'affichage sur votre site web dans un beau et facile de faire des recherches sur la mise en page.",
    "TEXT-RECIPESETT3": "Mise à niveau pour créer et afficher des recettes illimitées",
    "TEXT-SETTINGS": "Settings",
    "TEXT-RECIPEPAGE": "Page Recette",
    "TEXT-SEARCHBOX": "Boîte de recherche",
    "TEXT-SEARCHDROPDOWNS": "Recherchez déroulants",
    "TEXT-SOCIALSHAREICONS": "Icônes Partager Social",
    "TEXT-RECIPEDETAILPAGE": "Fiche détaillée Page",
    "TEXT-DESIGN": "Design",
  

    "TEXT-BACKGROUNDCOLORANDOPACITY": "Fond",
    "TEXT-FIELDCOLORANDOPACITY": "Couleur et opacité du champ",
    "TEXT-PAGEBACKGROUNDCOLORANDOPACITY": "Page fond et couleur opacité",
    "TEXT-FONTANDTEXTCOLOR": "Texte",
    "TEXT-TLFONTANDTEXTCOLOR": "Tag Label",
    "TEXT-RTFONTANDTEXTCOLOR": "Recette titre police et texte couleur",
    "TEXT-DESCFONTANDTEXTCOLOR": "Description title font et la couleur du texte",
    "TEXT-CHOOSEPAGE": "Choisir la page à afficher",
    "TEXT-SEARCHRECIPES": "Chercher des recettes",
    "TEXT-CHOOSEELEMENTS": "Masquer ou afficher éléments",
    "TEXT-CHOOSEPAGELAYOUT": "Choisir page mise",
    "TEXT-BLOCK": "Bloc",
    "TEXT-LIST": "Liste",
    "TEXT-GENBACK": "Contexte général",
    "TEXT-BOXES": "Customize Sections",
    "TEXT-SEARCHBOXDESIGN": "Recherche Boîte Design",
    "TEXT-FILTERBOXDESIGN": "Filtre Boîte",
    "TEXT-GENERALRBD": "Général Recette boîte Design",
    "TEXT-TAGSDESIGN": "Étiquette Design",
    "TEXT-BACKBUTTON": "Bouton Retour",
    "TEXT-ICONCOLOR": "Icôn Couleur",
    "TEXT-GENERAL": "Général",
    "TEXT-SECTIONS": "Sections",
    "TEXT-SERVSIZEANDTIME": "Portion taille et temps",
    "TEXT-BADGE": "Insigne",
    "TEXT-TAGLABEL": "Tag label",
    "TEXT-PANELTITLES": " Panneau Titres",
    "TEXT-RECIPECOMPTITLES": "Recette Composant Titres",
    "TEXT-INGRELISTS": "Ingrédient Listes",
    "TEXT-DESCSECTION": "Description L'article",
    "TEXT-PANELDETAILS": "Panneau Détails",
    "TEXT-FILTERBOX": "Boîte de filtre",
    "TEXT-RECIPEBOX": "Boîte à recettes",
    "TEXT-SOCIALICONSCOLOR": "Social Icônes Couleur",
    "TEXT-SUPPORT": "Appuyer",
    "TEXT-DEVELOPERINFO": "Infos développeur",
    "TEXT-REVIEWTHEAPP": "Examiner l'App",
    "TEXT-REVIEWPARA": "Avez-vous apprécié l'app ? Passez le mot et le rythme nous dans le marché de l'app",
    "BUTTON-RATEUS": "Nous taux",

    "TEXT-ENTERSEARCH": "Entrez un terme de recherche pour trouver votre recette",
    "TEXT-MAININGRE": "Ingrédient principal",
    "TEXT-CUISINE": "Cuisine",
    "TEXT-COURSE": "Cours",
    "TEXT-SEASON": "Saison",
    "TEXT-TIME": "Temps",
    "TEXT-DIFFICULTY": "Difficulté",
    "TEXT-NONE": "Aucun",
    "TEXT-FILTERRECIPES": "Recettes de filtre",
    "TEXT-HIDERECIPES": "Recettes cacher",
    "TEXT-ERECIPENAME": "Entrer nom de la recette",
    "TEXT-EDESC": "Entrez Recette Description",
    "TEXT-ESERVSIZE": "Entrez la taille des portions",
    "TEXT-EPREPTIME": "Entrez le temps Préparation",
    "TEXT-ETOTALTIME": "Entre temps Total",
    "TEXT-ECOMPNAME": "Entrez le nom du composant par exemple. Plat principal,Marinade,Sauce",
    "TEXT-EINGRE": "Ingrédient entrer",
    "TEXT-EDIREC": "Entrez directions étape par étape",
    "TEXT-ETIP": "Entrez Conseils d'experts",

    "TEXT-NUTRISECTION": "Section nutritionnelle",
    "TEXT-NUTRIFACTS": "Faits nutritionnels",
    "TEXT-AMOUNT": "Quantité par Portion",
    "TEXT-CALORIES": "Calories",
    "TEXT-ECALORIES": "Entrez les calories totales pour la recette",
    "TEXT-ShortCALORIES": "par exemple. 200",
    "TEXT-ErrCALORIES": "Le champ de calories est facultatif et doit être inférieur à 10 caractères",
    "TEXT-FAT": "Graisse",
    "TEXT-EFAT": "Entrez le contenu en matières grasses",
    "TEXT-ShortFAT": "par exemple. 14gms ou 20%",
    "TEXT-ErrFAT": "Le champ graisse est facultatif et doit être inférieur à 10 caractères",
    "TEXT-CARBO": "Glucides",
    "TEXT-ECARBO": "Entrez la teneur en glucides",
    "TEXT-ShortCARBO": "par exemple. 25gms ou 70%",
    "TEXT-ErrCARBO": "Le champ d'hydrates de carbone est facultatif et doit être inférieur à 10 caractères",
    "TEXT-PROTIEN": "Protéine",
    "TEXT-EPROTIEN": "Entrer le contenu en protéines",
    "TEXT-ShortPROTIEN": "par exemple. 10gms ou 10%",
    "TEXT-ErrPROTIEN": "Le champ protéine est facultatif et doit être inférieur à 10 caractères",
    "TEXT-DISCLAIMER": "Désistement",
    "TEXT-EDISCLAIMER": "Saisissez un avertissement nutritionnel",
    "TEXT-ShortDISCLAIMER": "par exemple. Remarque: Manger le bon régime alimentaire pour vos objectifs peut entraîner des gains accrus et diminuer la graisse corporelle.",
    "TEXT-ErrDISCLAIMER": "Le champ de responsabilité est facultatif et doit être inférieur à 150 caractères",
    "TEXT-TAGSANDTIMES": "Tags et temps",
    "TEXT-ErrRECIPENAME2": "Nom de la recette déjà utilisé",
    "TEXT-SERVINGSPRECIPE" : "Portions par recette",
    "TEXT-AMOUNTPSERVING": "quantité par portion",
    "TEXT-NUTSERV": "Taille de portion, Calories, etc.",
    "TEXT-NOTICETEXT": "Texte d'avis",

    "TEXT-BY": "Par"
    });

    $translateProvider.translations('ru', {
    
    "BUTTON-CONTACTUS": "Свяжитесь с нами",
    "BUTTON-UPGRADE": "модернизировать",
    "BUTTON-UPGRADENOW": "Обнови сейчас",
    "BUTTON-GOTO": "идти к",
    "BUTTON-SAVECHANGES": "Сохранить изменения",
    "BUTTON-DRAFTS": "Проекты",
    "BUTTON-ADDARECIPE": "Добавить Рецепт",
    "BUTTON-BACK": "назад",
    "BUTTON-NEXT": "следующий",
    "BUTTON-DELETERECIPE": "Удалить Рецепт",
    "BUTTON-SAVERECIPE": "Сохранить Рецепт",
    "BUTTON-SAVERECIPETODRAFTS": "Сохранить рецепт к Проекты",
    "BUTTON-SUBMITRECIPE": "Отправить Рецепт",
    "BUTTON-CREATERECIPE": "Создайте Рецепт",
    "TEXT-WELCOME": "Добро пожаловать на рецепты app!",
    "TEXT-WELCOME2": "Чтобы начать работу, добавьте свой первый рецепт.",
    "TEXT-INTRO": "Введение",
    "TEXT-GENERALINFO": "Общая информация",
    "TEXT-IMAGE": "Изображение",
    "TEXT-INGREDIENTS": "Ингредиенты",
    "TEXT-DIRECTIONS": "направления",
    "TEXT-TIPS": "Советы экспертов",
    "TEXT-RECIPENAME": "Название рецепта",
    "TEXT-ShortRECIPENAME": "Введите краткое название для вашего рецепта eg. Цыпленок Тикка Масала",
    "TEXT-ErrRECIPENAME": "Рецепт name является обязательным и должно быть меньше 50 символов",
    "TEXT-DESC": "Описание",
    "TEXT-ShortDESC": "Введите краткое Описание для вашего рецепта",
    "TEXT-ErrDESC": "Описание не требуется и не должна превышать 500 символов",
    "TEXT-TAGS": "Теги",
    "TEXT-SHRIMP": "Креветка",
    "TEXT-CHICKEN": "Курица",
    "TEXT-EGG": "Яйцо",
    "TEXT-FISH": "Рыба",
    "TEXT-BEEF": "говяжий",
    "TEXT-OFFAL": "потроха",
    "TEXT-DUCK": "Утка",
    "TEXT-PORK": "Свинина",
    "TEXT-SCALLOPS": "гребешки",
    "TEXT-TURKEY": "Турция",
    "TEXT-PASTA": "Макаронные изделия",
    "TEXT-RABBIT": "кролик",
    "TEXT-RICE": "Рис",
    'TEXT-SALMON': 'Salmon',
    'TEXT-TROUT': 'Trout',
    'TEXT-MACKEREL': 'Mackerel',
    'TEXT-SARDINES': 'Sardines',
    'TEXT-COD': 'Cod',
    'TEXT-POLLOCK': 'Pollock',
    'TEXT-HAKE': 'Hake',
    'TEXT-GREYMULLET': 'Grey Mullet',
    'TEXT-LOBSTER': 'Lobster',
    'TEXT-SCALLOPS': 'Scallops',
    'TEXT-MUSSELS': 'Mussels',
    'TEXT-CLAMS': 'Clams',
    "TEXT-LAMB": "ягненок",
    "TEXT-AMERICAN": "Американская",
    "TEXT-JAPANESE": "Японский",
    "TEXT-INDIAN": "индийский",
    "TEXT-CHINESE": "Китайский",
    "TEXT-AFRICAN": "африканец",
    "TEXT-ASIAN": "азиатский",
    "TEXT-MIDDLEEASTERN": "Ближневосточный",
    "TEXT-GERMAN": "Немецкий",
    "TEXT-GREEK": "греческий",
    "TEXT-ITALIAN": "итальянский",
    "TEXT-MEXICAN": "мексиканский",
    "TEXT-THAI": "тайский",
    "TEXT-CARRIBEAN": "карибский",
    "TEXT-ENGLISH-SCOTTISH": "английский-шотландская",
    "TEXT-FRENCH": "Французский",
    "TEXT-GLUTENFREE": "Не содержит глютен",
    "TEXT-INDONESIAN": "индонезийский",
    "TEXT-VEGAN": "вегетарианский",
    "TEXT-VEGETARIAN": "вегетарианец",
    "TEXT-APPETIZER": "Закуска",
    "TEXT-ENTREE": "основное блюдо",
    "TEXT-BREAD": "Хлеб",
    "TEXT-DESSERT": "Десерт",
    "TEXT-COCKTAIL": "коктейль",
    "TEXT-NONALCOHOLICBEVERAGES": "Безалкогольные напитки",
    "TEXT-B-FAST": "Завтрак",
    "TEXT-BRUNCH": "поздний завтрак",
    "TEXT-LUNCH": "ланч",
    "TEXT-SANDWICH": "бутерброд",
    "TEXT-SOUP": "Суп",
    "TEXT-SALAD": "Салат",
    "TEXT-SIDES": "сторона",
    "TEXT-DINNER": "Ужин",
    "TEXT-MONSOON": "муссон",
    "TEXT-SPRING": "весна",
    "TEXT-WINTER": "зима",
    "TEXT-SUMMER": "Лето",
    "TEXT-FALL": "осень",
    "TEXT-EASY": "Легко",
    "TEXT-MEDIUM": "средний",
    "TEXT-HARD": "Жесткий",
    "TEXT-ShortTAGS":"Выберите теги, Помощь Поиск Ваш рецепт , вы можете выбрать несколько тегов до 6",
    "TEXT-ErrTAGS":"Теги - обязательное для заполнения поле , максимальное теги, которые могли бы быть выбраны - 6",
    "TEXT-SERVSIZE": "Размер порции",
    "TEXT-ShortSERVSIZE": "например. 5",
    "TEXT-ErrSERVSIZE": "В размер и должно быть менее 9 символов",
    "TEXT-PREPTIME": "время преп",
    "TEXT-ShortPREPTIME": "например. 30 минут",
    "TEXT-ErrPREPTIME": "Prep требуется время и должно быть менее 9 символов",
    "TEXT-TOTALTIME": "Общее время",
    "TEXT-ShortTOTALTIME": "например. 55 мин",
    "TEXT-ErrTOTALTIME": "Общее время является необходимой и должна быть менее 9 символов",
    "TEXT-ShortIMAGE": "Нажмите на значок камеры для выбора процедуры ПОС с Wix Media Library . Идеальный размер изображения должен быть больше (500 X 500)px и площадь в размер.Примечание:- Вы должны иметь возможность загрузки , обрезать и редактировать ваши фото в Wix media library.",
    "TEXT-COMPO": "Ингредиенты ( Добавить компонент",
    "TEXT-ShortCOMPO": "Введите компонентов для вашего рецепта eg. Главное блюдо , соус , маринад , выключатель обогрева заднего стекла , Заправка и затем список составляющих для каждого из этих компонентов eg. 10 граммов масла , 5 яйца",
    "TEXT-COMPONAME": "Название компонента",
    "TEXT-ErrCOMPONAME": "Название компонента является необходимой и должна быть меньше 50 символов",
    "TEXT-INGRE": "Список ингредиентов (Добавить ",
    "TEXT-ErrINGRE": "Ингредиент name является обязательным и должно быть меньше 50 символов",
    "TEXT-DIREC": "Направлениях ( Добавить",
    "TEXT-ShortDIREC": "Введите шаг за шагом направления для вашего рецепта",
    "TEXT-ErrDIREC": "Направление - обязательное для заполнения поле",
    "TEXT-EXPERTTIPS": "Советы экспертов ( Добавить",
    "TEXT-ShortEXPERTTIPS": "Введите советы экспертов для вашего рецепта",
    "TEXT-MAIN": "Главный",
    "BUTTON-MANAGERECIPES": "Управление Рецепты",
    "TEXT-RECIPESETT1": "Это рецепт App панель настройки.",
    "TEXT-RECIPESETT2": "Дисплей рецепты на вашем сайте в красивом и легко доступной для поиска отчета.",
    "TEXT-RECIPESETT3": "Обновление для создания и отображения неограниченное количество рецептов",
    "TEXT-SETTINGS": "настройки",
    "TEXT-RECIPEPAGE": "Рецепт страницы",
    "TEXT-SEARCHBOX": "Поле поиска",
    "TEXT-SEARCHDROPDOWNS": "Поиск выпадающие",
    "TEXT-SOCIALSHAREICONS": "Социального поделиться значки",
    "TEXT-RECIPEDETAILPAGE": "Рецепт подробно страницы",
    "TEXT-DESIGN": "дизайн",
  

    "TEXT-BACKGROUNDCOLORANDOPACITY": "Цвет",
    "TEXT-FIELDCOLORANDOPACITY": "Цвет поля и непрозрачность",
    "TEXT-PAGEBACKGROUNDCOLORANDOPACITY": "страницы Фоновый цвет  и непрозрачность",
    "TEXT-FONTANDTEXTCOLOR": "Тексты",
    "TEXT-TLFONTANDTEXTCOLOR": "Тег шрифта Этикетка и цвет текста",
    "TEXT-RTFONTANDTEXTCOLOR": "Рецепт Шрифт названия и цвет текста",
    "TEXT-DESCFONTANDTEXTCOLOR": "Описание шрифта название и цвет текста",
    "TEXT-CHOOSEPAGE": "выбрать страницу для отображения",
    "TEXT-SEARCHRECIPES": "Поиск рецептов",
    "TEXT-CHOOSEELEMENTS": "Скрыть или Показать элементы",
    "TEXT-CHOOSEPAGELAYOUT": "Выберите Макет страницы",
    "TEXT-BLOCK": "блок",
    "TEXT-LIST": "Список",
    "TEXT-GENBACK": "общий фон",
    "TEXT-BOXES": "ящики",
    "TEXT-SEARCHBOXDESIGN": "Поиск Окно Дизайн",
    "TEXT-FILTERBOXDESIGN": "Фильтр Окно",
    "TEXT-GENERALRBD": "Генеральная рецепт коробка дизайн",
    "TEXT-TAGSDESIGN": "теги дизайн",
    "TEXT-BACKBUTTON": "Кнопка назад",
    "TEXT-ICONCOLOR": "цвет значка",
    "TEXT-GENERAL": "Генеральная",
    "TEXT-SECTIONS": "Разделы",
    "TEXT-SERVSIZEANDTIME": "Размер порции и времени",
    "TEXT-BADGE": "знак",
    "TEXT-TAGLABEL": "тег Label",
    "TEXT-PANELTITLES": "Панельные Названия",
    "TEXT-RECIPECOMPTITLES": "Названия компонентов Рецепт",
    "TEXT-INGRELISTS": "Ингредиента списки",
    "TEXT-DESCSECTION": "Описание раздела",
    "TEXT-PANELDETAILS": "Панель Подробнее",
    "TEXT-FILTERBOX": "Фильтр Окно",
    "TEXT-RECIPEBOX": "рецепта Окно",


    "TEXT-SOCIALICONSCOLOR": "цвет социальные иконки",
    "TEXT-SUPPORT": "Поддержка",
    "TEXT-DEVELOPERINFO": "Информация о разработчике",
    "TEXT-REVIEWTHEAPP": "обзор приложений",
    "TEXT-REVIEWPARA": "Вы пользовались app? Распространение и скорости нас в app рынка",
    "BUTTON-RATEUS": "Оцените нас",
    "TEXT-ENTERSEARCH": "Введите термин для поиска для поиска рецепта",
    "TEXT-MAININGRE": "Главный ингридиент",
    "TEXT-CUISINE": "Кухня",
    "TEXT-COURSE": "блюдо",
    "TEXT-SEASON": "сезон",
    "TEXT-TIME": "Время",
    "TEXT-DIFFICULTY": "трудность",
    "TEXT-NONE": "никто",
    "TEXT-FILTERRECIPES": "Фильтр рецепты",
    "TEXT-HIDERECIPES": "Скрыть рецепты",
    "TEXT-ERECIPENAME": "Введите Название рецепта",
    "TEXT-EDESC": "Введите рецепта описание",
    "TEXT-ESERVSIZE": "Введите размер порции.",
    "TEXT-EPREPTIME": "Введите подготовки время",
    "TEXT-ETOTALTIME": "Введите общее время",
    "TEXT-ECOMPNAME": "Введите имя компонента eg. Главное блюдо,соус,маринаде",
    "TEXT-EINGRE": "Введите ингредиент",
    "TEXT-EDIREC": "Введите шаг за шагом направления",
    "TEXT-ETIP": "Введите наконечник экспертов",
    "TEXT-NOTICETEXT": "Текст уведомления",

    "TEXT-NUTRISECTION": "Питательная Раздел",
    "TEXT-NUTRIFACTS": "Пищевая ценность",
    "TEXT-AMOUNT": "количество на порцию",
    "TEXT-CALORIES": "Калории",
    "TEXT-ECALORIES": "Введите количество калорий для рецепта",
    "TEXT-ShortCALORIES": "например. 200",
    "TEXT-ErrCALORIES": "Поле калорий не является обязательным и должно быть не менее 10 символов",
    "TEXT-FAT": "Жир",
    "TEXT-EFAT": "Введите содержание жира",
    "TEXT-ShortFAT": "например. 14gms или 20%",
    "TEXT-ErrFAT": "Жира поле не является обязательным и должно быть не менее 10 символов",
    "TEXT-CARBO": "углевод",
    "TEXT-ECARBO": "Введите содержание углеводов",
    "TEXT-ShortCARBO": "например. 25gms или 70%",
    "TEXT-ErrCARBO": "Поле углевода не является обязательным и должно быть не менее 10 символов",
    "TEXT-PROTIEN": "протеин",
    "TEXT-EPROTIEN": "Введите содержание белка",
    "TEXT-ShortPROTIEN": "например. 10gms или 10%",
    "TEXT-ErrPROTIEN": "Поле белок не является обязательным и должно быть не менее 10 символов",
    "TEXT-DISCLAIMER": "отказ",
    "TEXT-EDISCLAIMER": "Введите питательное отказ от ответственности",
    "TEXT-ShortDISCLAIMER": "например. Примечание: Питание правильную диету для ваших целей может привести к увеличению прибыли и снижение подкожного жира.",
    "TEXT-ErrDISCLAIMER": "Поле отказ от ответственности не является обязательным и должно быть меньше, чем 150 символов",
    "TEXT-TAGSANDTIMES": "Теги и времена",
    "TEXT-ErrRECIPENAME2": "уже используется Рецепт Имя",
    "TEXT-SERVINGSPRECIPE" : "Порций в рецепте",
    "TEXT-AMOUNTPSERVING": "количество на порцию",
    "TEXT-NUTSERV": "Размер порции, калории, и т.д.",
    "TEXT-BY": "по"
    });

 $translateProvider.translations('hi', {

 "BUTTON-CONTACTUS": "संपर्क करें",
    "BUTTON-UPGRADE": "उन्नयन",
    "BUTTON-UPGRADENOW": "अभी अपग्रेड करें",
    "BUTTON-GOTO": "जाओ",
    "BUTTON-SAVECHANGES": "परिवर्तनों को सुरक्षित करें",
    "BUTTON-DRAFTS": "ड्राफ्ट",
    "BUTTON-ADDARECIPE": "व्यंजन जोड़े",
    "BUTTON-BACK": "वापस",
    "BUTTON-NEXT": "अगला",
    "BUTTON-DELETERECIPE": "व्यंजन मिटाना",
    "BUTTON-SAVERECIPE": "व्यंजन बचाना",
    "BUTTON-SAVERECIPETODRAFTS": "व्यंजन ड्राफ्ट में बचाना",
    "BUTTON-SUBMITRECIPE": "व्यंजन जमा",
    "BUTTON-CREATERECIPE": "व्यंजन बनाएं",
    "TEXT-WELCOME": "व्यंजनों अप्प में आपका स्वागत है!",
    "TEXT-WELCOME2": "आरंभ करने के लिए, अपने पहले व्यंजनों जोड़ें।",
    "TEXT-INTRO": "भूमिका",
    "TEXT-GENERALINFO": "सामान्य जानकारी",
    "TEXT-IMAGE": "छवि",
    "TEXT-INGREDIENTS": "सामग्री",
    "TEXT-DIRECTIONS": "दिशा-निर्देश",
    "TEXT-TIPS": "विशेषज्ञ युक्तियाँ",
    "TEXT-RECIPENAME": "व्यंजन का नाम",
    "TEXT-ShortRECIPENAME": "अपने व्यंजन उदाहरण के लिए एक छोटा शीर्षक दर्ज करें। उदाहरण: चिकन टिक्का मसाला",
    "TEXT-ErrRECIPENAME": "व्यंजन नाम की आवश्यकता है और कम से कम 50 अक्षरों का होना चाहिए",
    "TEXT-DESC": "विवरण",
    "TEXT-ShortDESC": "अपने विशेषज्ञ के लिए एक संक्षिप्त विवरण दर्ज करें",
    "TEXT-ErrDESC": "विवरण जरूरी है और कम से कम 500 अक्षर में होना चाहिए",
    "TEXT-TAGS": "टैग",
    "TEXT-SHRIMP": "झींगा",
    "TEXT-CHICKEN": "मुर्गी",
    "TEXT-EGG": "अंडा",
    "TEXT-FISH": "मछली",
    "TEXT-BEEF": "गोमांस",
    "TEXT-OFFAL": "ऑफल",
    "TEXT-DUCK": "बत्तख",
    "TEXT-PORK": "शूकर-मांस",
    "TEXT-SCALLOPS": "स्कैलपस",
    "TEXT-TURKEY": "तुर्की",
    "TEXT-PASTA": "पास्ता",
    "TEXT-RABBIT": "खरगोश",
    "TEXT-RICE": "चावल",
    'TEXT-SALMON': 'Salmon',
    'TEXT-TROUT': 'Trout',
    'TEXT-MACKEREL': 'Mackerel',
    'TEXT-SARDINES': 'Sardines',
    'TEXT-COD': 'Cod',
    'TEXT-POLLOCK': 'Pollock',
    'TEXT-HAKE': 'Hake',
    'TEXT-GREYMULLET': 'Grey Mullet',
    'TEXT-LOBSTER': 'Lobster',
    'TEXT-SCALLOPS': 'Scallops',
    'TEXT-MUSSELS': 'Mussels',
    'TEXT-CLAMS': 'Clams',
    "TEXT-LAMB": "मेमना",
    "TEXT-AMERICAN": "अमेरिकन",
    "TEXT-JAPANESE": "जापानी",
    "TEXT-INDIAN": "भारतीय",
    "TEXT-CHINESE": "चीनी",
    "TEXT-AFRICAN": "अफ़्रीकी",
    "TEXT-ASIAN": "एशियाई",
    "TEXT-MIDDLEEASTERN": "मध्य पूर्व",
    "TEXT-GERMAN": "जर्मन",
    "TEXT-GREEK": "यूनानी",
    "TEXT-ITALIAN": "इतालवी",
    "TEXT-MEXICAN": "मैक्सिकन",
    "TEXT-THAI": "थाई",
    "TEXT-CARRIBEAN": "कैरिबियन",
    "TEXT-ENGLISH-SCOTTISH": "अंग्रेजी-स्कॉटिश",
    "TEXT-FRENCH": "फ्रेंच",
    "TEXT-GLUTENFREE": "ग्लूटेन मुक्त",
    "TEXT-INDONESIAN": "इन्डोनेशियाई",
    "TEXT-VEGAN": "वेगं",
    "TEXT-VEGETARIAN": "शाकाहारी",
    "TEXT-APPETIZER": "अप्पेतिज़ेर",
    "TEXT-ENTREE": "एंट्री",
    "TEXT-BREAD": "ब्रेड",
    "TEXT-DESSERT": "मिठाई",
    "TEXT-COCKTAIL": "कॉकटेल",
    "TEXT-NONALCOHOLICBEVERAGES": "गैर अल्कोहल पेय पदार्थ",
    "TEXT-B-FAST": "ब्रेकफ़ास्ट",
    "TEXT-BRUNCH": "ब्रंच",
    "TEXT-LUNCH": "लंच",
    "TEXT-SANDWICH": "सैंडविच",
    "TEXT-SOUP": "सूप",
    "TEXT-SALAD": "सलाद",
    "TEXT-SIDES": "साइड्स",
    "TEXT-DINNER": "डिनर",
    "TEXT-MONSOON": "मानसून",
    "TEXT-SPRING": "वसंत",
    "TEXT-WINTER": "सर्दी",
    "TEXT-SUMMER": "गर्मी",
    "TEXT-FALL": "पतझड़",
    "TEXT-EASY": "आसान",
    "TEXT-MEDIUM": "मध्यम",
    "TEXT-HARD": "कठिन",
    "TEXT-ShortTAGS":"टैग का चयन करें कि आपकी विशेषज्ञ खोज, आप 6 तक एकाधिक टैग का चयन कर सकते",
    "TEXT-ErrTAGS":"टैग एक आवश्यक फ़ील्ड है, अधिकतम टैग है कि चयन किया जा सकता है 6",
    "TEXT-SERVSIZE": "सर्विंग size साइज",
    "TEXT-ShortSERVSIZE": "जैसे। 5",
    "TEXT-ErrSERVSIZE": "विशेषज्ञ की आवश्यकता है और कम से कम 10 अक्षरों का होना चाहिए",
    "TEXT-PREPTIME": "तैयारी समय",
    "TEXT-ShortPREPTIME": "जैसे। 30 मिनट",
    "TEXT-ErrPREPTIME": "प्रस्तुत करने का समय की आवश्यकता है और कम से कम 10 अक्षरों का होना चाहिए",
    "TEXT-TOTALTIME": "कुल समय",
    "TEXT-ShortTOTALTIME": "जैसे। 55 मिनट",
    "TEXT-ErrTOTALTIME": "कुल समय की आवश्यकता है और कम से कम 10 अक्षरों का होना चाहिए",
    "TEXT-ShortIMAGE": "कैमरा आइकन पर क्लिक करें Wix मीडिया लाइब्रेरी से अपनी तस्वीर का चयन करें। अपनी छवि के आदर्श आकार अधिक होना चाहिए की तुलना में (500 X 500) पिक्सल और वर्ग size.Note में: - आप अपलोड करें, फसल और Wix मीडिया लाइब्रेरी में अपने pics संपादित करने में सक्षम होना चाहिए।",
    "TEXT-COMPO": "सामग्री ( कॉम्पोनेन्ट जोड़ना",
    "TEXT-ShortCOMPO": "अपने विशेषज्ञ के लिए कॉम्पोनेन्ट दर्ज करें। जैसे मुख्य पकवान, सॉस, अचार, टुकड़े, भरने और इन घटकों जैसे से प्रत्येक के लिए तो कॉम्पोनेन्ट सूची।जैसे 10 ग्राम तेल, 5 अंडे",
    "TEXT-COMPONAME": "कॉम्पोनेन्ट का नाम",
    "TEXT-ErrCOMPONAME": "कॉम्पोनेन्ट नाम की आवश्यकता है और कम से कम 50 अक्षरों का होना चाहिए",
    "TEXT-INGRE": "सामग्री सूची ( जोड़ना ",
    "TEXT-ErrINGRE": "सामग्री नाम की आवश्यकता है और कम से कम 50 अक्षरों का होना चाहिए",
    "TEXT-DIREC": "दिशा-निर्देश ( जोड़ना",
    "TEXT-ShortDIREC": "अपने व्यंजनों के लिए कदम से कदम निर्देश दर्ज",
    "TEXT-ErrDIREC": "दिशा आवश्यकता क्षेत्र है ",
    "TEXT-EXPERTTIPS": "विशेषज्ञ युक्तियाँ ( जोड़ना",
    "TEXT-ShortEXPERTTIPS": "अपने व्यंजनों के लिए विशेषज्ञ सुझाव दर्ज",
    "TEXT-MAIN": "मुख्य",
    "BUTTON-MANAGERECIPES": "व्यंजन व्यवस्था",
    "TEXT-RECIPESETT1": "यह व्यंजन एप्लिकेशन सेटिंग पैनल है।",
    "TEXT-RECIPESETT2": "एक सुंदर और आसानी लेआउट में अपनी वेबसाइट पर व्यंजन प्रदर्शित करें।",
    "TEXT-RECIPESETT3": "बनाने के लिए उन्नयन और असीमित व्यंजनों प्रदर्शित",
    "TEXT-SETTINGS": "सेटिंग्स",
    "TEXT-RECIPEPAGE": "व्यंजन पृष्ठ",
    "TEXT-SEARCHBOX": "खोज बॉक्स",
    "TEXT-SEARCHDROPDOWNS": "खोज ड्रोपडावं",
    "TEXT-SOCIALSHAREICONS": "सामाजिक शेयर इकोन्स",
    "TEXT-RECIPEDETAILPAGE": "व्यंजन विस्तार पृष्ठ",
    "TEXT-DESIGN": "डिज़ाइन",
  

    "TEXT-BACKGROUNDCOLORANDOPACITY": "पृष्ठभूमि",
    "TEXT-FIELDCOLORANDOPACITY": "फील्ड रंग और अस्पष्टता",
    "TEXT-PAGEBACKGROUNDCOLORANDOPACITY": "पृष्ठ पृष्ठभूमि रंग और अस्पष्टता",
    "TEXT-FONTANDTEXTCOLOR": "पाठ",
    "TEXT-TLFONTANDTEXTCOLOR": "टैग लेबल फ़ॉन्ट और पाठ का रंग",
    "TEXT-RTFONTANDTEXTCOLOR": "व्यंजनों शीर्षक फ़ॉन्ट और पाठ का रंग",
    "TEXT-DESCFONTANDTEXTCOLOR": "विवरण शीर्षक फ़ॉन्ट और पाठ का रंग",
    "TEXT-CHOOSEPAGE": "प्रदर्शित करने के लिए पृष्ठ चुनें",
    "TEXT-SEARCHRECIPES": "व्यंजन खोज",
    "TEXT-CHOOSEELEMENTS": "एलिमेंट्स दिखाना या छिपाना",
    "TEXT-CHOOSEPAGELAYOUT": "पेज लेआउट चुनें",
    "TEXT-BLOCK": "खंड",
    "TEXT-LIST": "सूची",
    "TEXT-GENBACK": "सामान्य पृष्ठभूमि",
    "TEXT-BOXES": "बक्से",
    "TEXT-SEARCHBOXDESIGN": "खोज बॉक्स डिजाइन",
    "TEXT-FILTERBOXDESIGN": "फिल्टर बॉक्स",
    "TEXT-GENERALRBD": "सामान्य व्यंजन बॉक्स डिजाइन",
    "TEXT-TAGSDESIGN": "टैग डिजाइन",
    "TEXT-BACKBUTTON": "पिछला बटन",
    "TEXT-ICONCOLOR": "आइकन रंग",
    "TEXT-GENERAL": "सामान्य",
    "TEXT-SECTIONS": "खंड",
    "TEXT-SERVSIZEANDTIME": "सर्विंग आकार और समय",
    "TEXT-BADGE": "बैज",
    "TEXT-TAGLABEL": "टैग लेबल",
    "TEXT-PANELTITLES": "पैनल टाइटल",
    "TEXT-RECIPECOMPTITLES": "व्यंजन कॉम्पोनेन्ट टाइटल",
    "TEXT-INGRELISTS": "सामग्री सूची",
    "TEXT-DESCSECTION": "विवरण सेक्शन",
    "TEXT-PANELDETAILS": "पैनल विवरण",
    "TEXT-FILTERBOX": "फिल्टर बॉक्स",
    "TEXT-RECIPEBOX": "व्यंजन बॉक्स",


    "TEXT-SOCIALICONSCOLOR": "सामाजिक इकोन्स रंग",
    "TEXT-SUPPORT": "समर्थन",
    "TEXT-DEVELOPERINFO": "डेवलपर जानकारी",
    "TEXT-REVIEWTHEAPP": "अप्प की समीक्षा करें",
    "TEXT-REVIEWPARA": "आप अप्प का आनंद लिया है? अप्प मार्किट में हमें रेटिंग दें",
    "BUTTON-RATEUS": "हमें रेटिंग दें",
    "TEXT-ENTERSEARCH": "अपने व्यंजनों खोजने के लिए खोज शब्द दर्ज करें",
    "TEXT-MAININGRE": "मुख्य सामग्री",
    "TEXT-CUISINE": "क्विसीन",
    "TEXT-COURSE": "कोर्स",
    "TEXT-SEASON": "ऋतु",
    "TEXT-TIME": "टाइम",
    "TEXT-DIFFICULTY": "कठिनाई",
    "TEXT-NONE": "कोई नहीं",
    "TEXT-FILTERRECIPES": "व्यंजन फिल्टर",
    "TEXT-HIDERECIPES": "व्यंजन छुपाएं",
    "TEXT-ERECIPENAME": "व्यंजन का नाम दर्ज करें",
    "TEXT-EDESC": "व्यंजनों विवरण दर्ज करें",
    "TEXT-ESERVSIZE": "सर्विंग समय दर्ज करें",
    "TEXT-EPREPTIME": "तैयारी का समय दर्ज करें",
    "TEXT-ETOTALTIME": "कुल समय दर्ज करें",
    "TEXT-ECOMPNAME": "कॉम्पोनेन्ट नाम दर्ज करें। जैसे मुख्य पकवान, सॉस, अचार",
    "TEXT-EINGRE": "सामग्री दर्ज करें",
    "TEXT-EDIREC": "कदम से कदम दिशा करें",
    "TEXT-ETIP": "विशेषज्ञ टिप दर्ज करें",

    "TEXT-NUTRISECTION": "पोषण अनुभाग",
    "TEXT-NUTRIFACTS": "पोषण तथ्य",
    "TEXT-AMOUNT": "सेवारत प्रति राशि",
    "TEXT-CALORIES": "कैलोरी",
    "TEXT-ECALORIES": "कुल कैलोरी नुस्खा के लिए दर्ज करें",
    "TEXT-ShortCALORIES": "उदा। 200",
    "TEXT-ErrCALORIES": "कैलोरी फ़ील्ड वैकल्पिक है और कम से कम 10 वर्ण होने चाहिए",
    "TEXT-FAT": "वसा",
    "TEXT-EFAT": "वसा सामग्री दर्ज करें",
    "TEXT-ShortFAT": "उदा। 14gms या 20%",
    "TEXT-ErrFAT": "वसा फ़ील्ड वैकल्पिक है और कम से कम 10 वर्ण होने चाहिए",
    "TEXT-CARBO": "कार्बोहाइड्रेट",
    "TEXT-ECARBO": "कार्बोहाइड्रेट सामग्री दर्ज करें",
    "TEXT-ShortCARBO": "उदा। 25gms या 70%",
    "TEXT-ErrCARBO": "कार्बोहाइड्रेट फ़ील्ड वैकल्पिक है और कम से कम 10 वर्ण होने चाहिए",
    "TEXT-PROTIEN": "प्रोटीन",
    "TEXT-EPROTIEN": "प्रोटीन सामग्री में प्रवेश",
    "TEXT-ShortPROTIEN": "उदा। 10gms या 10%",
    "TEXT-ErrPROTIEN": "प्रोटीन फ़ील्ड वैकल्पिक है और कम से कम 10 वर्ण होने चाहिए",
    "TEXT-DISCLAIMER": "अस्वीकरण",
    "TEXT-EDISCLAIMER": "पोषण संबंधी अस्वीकरण दर्ज करें",
    "TEXT-ShortDISCLAIMER": "उदा। सूचना: अपने लक्ष्यों के लिए सही आहार खाने वृद्धि हुई लाभ और कम bodyfat में परिणाम हो सकता है।",
    "TEXT-ErrDISCLAIMER": "अस्वीकरण फ़ील्ड वैकल्पिक है और कम से कम 150 अक्षरों होना चाहिए",
    "TEXT-TAGSANDTIMES": "टैग और समय",
    "TEXT-ErrRECIPENAME2": "पहले से ही उपयोग में पकाने की विधि का नाम",
    "TEXT-SERVINGSPRECIPE" : "नुस्खा प्रति सर्विंग्स",
    "TEXT-AMOUNTPSERVING": "सेवारत प्रति राशि",
    "TEXT-NUTSERV": "आकार सेवित, कैलोरी, आदि",
    "TEXT-NOTICETEXT": "सूचना पाठ",
    
    "TEXT-BY": "द्वारा"
  })

$translateProvider.translations('it', {
   "BUTTON-CONTACTUS": "Contattaci",
    "BUTTON-UPGRADE": "Aggiornare",
    "BUTTON-UPGRADENOW": "Aggiorna Ora",
    "BUTTON-GOTO": "Vai a",
    "BUTTON-SAVECHANGES": "Salvare Modifiche",
    "BUTTON-DRAFTS": "Le bozze",
    "BUTTON-ADDARECIPE": "Aggiungere una ricetta",
    "BUTTON-BACK": "Indietro",
    "BUTTON-NEXT": "Avanti",
    "BUTTON-DELETERECIPE": "Eliminare Ricetta",
    "BUTTON-SAVERECIPE": "Salvare Ricetta",
    "BUTTON-SAVERECIPETODRAFTS": "Ricetta Salva in Bozze",
    "BUTTON-SUBMITRECIPE": "Invia Ricetta",
    "BUTTON-CREATERECIPE": "Creare ricetta",
    "TEXT-WELCOME": "Benvenuti alle ricette App!",
    "TEXT-WELCOME2": "Per iniziare , aggiungere la prima ricetta.",
    "TEXT-INTRO": "Intro",
    "TEXT-GENERALINFO": "Info generali",
    "TEXT-IMAGE": "Immagine",
    "TEXT-MEDIA": "Media",
    "TEXT-INGREDIENTS": "Ingredienti",
    "TEXT-DIRECTIONS": "Direzioni",
    "TEXT-TIPS": "Consigli di esperti",
    "TEXT-RECIPENAME": "Nome della ricetta",
    "TEXT-ShortRECIPENAME": "Immettere un breve titolo per la tua ricetta eg. Pollo Tikka Masala",
    "TEXT-ErrRECIPENAME": "Il nome della ricetta è necessario e deve essere meno di 50 caratteri",
    "TEXT-DESC": "Descrizione",
    "TEXT-ShortDESC": "Immettere una breve descrizione per la tua ricetta",
    "TEXT-ErrDESC": "La descrizione è obbligatoria e deve essere inferiore a 500 caratte",
    "TEXT-TAGS": "Tags",
    "TEXT-SHRIMP": "Gamberi",
    "TEXT-CHICKEN": "Pollo",
    "TEXT-EGG": "Uovo",
    "TEXT-FISH": "Pesce",
    "TEXT-BEEF": "Carni bovine",
    "TEXT-OFFAL": "Frattaglie",
    "TEXT-DUCK": "Duck",
    "TEXT-PORK": "Carne di maiale",
    "TEXT-SCALLOPS": "Capesante",
    "TEXT-TURKEY": "Turchia",
    "TEXT-PASTA": "Pasta",
    "TEXT-RABBIT": "Coniglio",
    "TEXT-RICE": "Riso",
    'TEXT-SALMON': 'Salmon',
    'TEXT-TROUT': 'Trout',
    'TEXT-MACKEREL': 'Mackerel',
    'TEXT-SARDINES': 'Sardines',
    'TEXT-COD': 'Cod',
    'TEXT-POLLOCK': 'Pollock',
    'TEXT-HAKE': 'Hake',
    'TEXT-GREYMULLET': 'Grey Mullet',
    'TEXT-LOBSTER': 'Lobster',
    'TEXT-SCALLOPS': 'Scallops',
    'TEXT-MUSSELS': 'Mussels',
    'TEXT-CLAMS': 'Clams',
    "TEXT-LAMB": "Agnello",
    "TEXT-AMERICAN": "American",
    "TEXT-JAPANESE": "Giapponese",
    "TEXT-INDIAN": "Indian",
    "TEXT-CHINESE": "Cinese",
    "TEXT-AFRICAN": "African",
    "TEXT-ASIAN": "Asian",
    "TEXT-MIDDLEEASTERN": "Medio Orientale",
    "TEXT-GERMAN": "Tedesco",
    "TEXT-GREEK": "Greco",
    "TEXT-ITALIAN": "Italiano",
    "TEXT-MEXICAN": "Mexican",
    "TEXT-THAI": "Thai",
    "TEXT-CARRIBEAN": "Caraibi",
    "TEXT-ENGLISH-SCOTTISH": "English-Scottish",
    "TEXT-FRENCH": "Francese",
    "TEXT-GLUTENFREE": "Senza glutine",
    "TEXT-INDONESIAN": "Indonesiano",
    "TEXT-VEGAN": "Vegan",
    "TEXT-VEGETARIAN": "Vegetariani",
    "TEXT-APPETIZER": "Antipasto",
    "TEXT-ENTREE": "Entree",
    "TEXT-BREAD": "Pane",
    "TEXT-DESSERT": "Dessert",
    "TEXT-COCKTAIL": "Cocktail",
    "TEXT-NONALCOHOLICBEVERAGES": "Bevande analcoliche",
    "TEXT-B-FAST": "Prima colazione",
    "TEXT-BRUNCH": "Brunch",
    "TEXT-LUNCH": "Pranzo",
    "TEXT-SANDWICH": "Sandwich",
    "TEXT-SOUP": "Zuppa",
    "TEXT-SALAD": "Insalata",
    "TEXT-SIDES": "Lati",
    "TEXT-DINNER": "La cena",
    "TEXT-MONSOON": "Monsoon",
    "TEXT-SPRING": "Molla",
    "TEXT-WINTER": "Inverno",
    "TEXT-SUMMER": "Estate",
    "TEXT-FALL": "Caduta",
    "TEXT-EASY": "Facile",
    "TEXT-MEDIUM": "Medie",
    "TEXT-HARD": "Disco",
    "TEXT-ShortTAGS":"Selezionare il tag che consentono di cercare la tua ricetta , è possibile selezionare i diversi tag fino a 6",
    "TEXT-ErrTAGS":"Tag è un campo obbligatorio , il numero massimo di tag che potrebbe essere selezionato è 6",
    "TEXT-SERVSIZE": "Dimensioni servente",
    "TEXT-ShortSERVSIZE": "Ad es. 5",
    "TEXT-ErrSERVSIZE": "La dimensione di servizio è obbligatorio e deve essere meno di 10 caratteri",
    "TEXT-PREPTIME": "Tempo Preparazione",
    "TEXT-ShortPREPTIME": "Ad es. 30 min",
    "TEXT-ErrPREPTIME": "Il tempo di preparazione è necessaria e dovrebbe essere inferiore a 10 caratteri",
    "TEXT-TOTALTIME": "Tempo totale",
    "TEXT-ShortTOTALTIME": "Ad es. 55 min",
    "TEXT-ErrTOTALTIME": "Il tempo totale è necessario e deve essere meno di 10 caratteri",
    "TEXT-ShortIMAGE": "Fare clic sull'icona della fotocamera per scegliere il vostro pic dal file wix Media Library.Nota:- Si dovrebbe essere in grado di caricare , tagliare e modificare le vostre foto in Wix libreria multimediale.",
    "TEXT-VIDEO": "Video",
    "BUTTON-TESTVIDEO": "Prova Video",
    "TEXT-ShortVIDEO":"Immettere Youtube, Vimeo o DailyMotion embed URL per la tua ricetta video . Per ottenere l'URL embed per il video vai a condividere-->Opzione di incorporare nel vostro Youtube o Vimeo/DailyMotion video e copiare l'URL nell'attributo src.",
    "TEXT-ErrVIDEO1":"L'URL del video è stato immesso ",
    "TEXT-ErrVIDEO2":" Non è valida o non è nel formato corretto.Provare a immettere un URL valido o procedere come questo è un campo facoltativo.",
    "TEXT-COMPO": "Ingredienti ( Aggiungi componente",
    "TEXT-ShortCOMPO": "Immettere i componenti per la tua ricetta eg. Piatto principale , salsa marinata , , ciliegina ,di riempimento e quindi elenco degli ingredienti per ciascuna di queste componenti eg. 10 grammi di olio , 5 uova",
    "TEXT-COMPONAME": "Nome componente",
    "TEXT-ErrCOMPONAME": "Il nome del componente è obbligatorio e deve essere meno di 50 caratteri",
    "TEXT-INGRE": "Elenco ingredienti ( Aggiungi ",
    "TEXT-ErrINGRE": "L'ingrediente nome è necessario e deve essere meno di 50 caratteri",
    "TEXT-DIREC": "Direzioni ( Aggiungi",
    "TEXT-ShortDIREC": "Inserisci passo dopo passo le indicazioni per la tua ricetta",
    "TEXT-ErrDIREC": "La direzione è un campo obbligatorio",
    "TEXT-EXPERTTIPS": "Consigli esperti ( Aggiungi",
    "TEXT-ShortEXPERTTIPS": "Inserire suggerimenti degli esperti per la tua ricetta",

    "TEXT-MAIN": "Principali",
    "BUTTON-MANAGERECIPES": "Gestire Ricette",
    "TEXT-RECIPESETT1": "Questa è la ricetta di App Pannello impostazioni.",
    "TEXT-RECIPESETT2": "Ricetta App ti aiuta a creare ricette e visualizzarli sul tuo sito.",
    "TEXT-RECIPESETT3": "Aggiornamento a creare e visualizzare un numero illimitato di ricette",
    "TEXT-SETTINGS": "Impostazioni",
    "TEXT-RECIPEPAGE": "Pagina ricetta",
    "TEXT-SEARCHBOX": "Casella Ricerca",
    "TEXT-SEARCHDROPDOWNS": "Ricerca menu discesa",
    "TEXT-SOCIALSHAREICONS": "Quota sociale icone",
    "TEXT-RECIPEDETAILPAGE": "Ricetta pagina dettaglio",
    "TEXT-DESIGN": "Progettazione",

    "TEXT-BACKGROUNDCOLORANDOPACITY": "Fondo",
    "TEXT-FIELDCOLORANDOPACITY": "Colore del campo e di opacità",
    "TEXT-PAGEBACKGROUNDCOLORANDOPACITY": "Colore di sfondo della pagina e di opacità",
    "TEXT-FONTANDTEXTCOLOR": "Testo",
    "TEXT-TLFONTANDTEXTCOLOR": "Etichetta della Tag font e il colore del testo",
    "TEXT-RTFONTANDTEXTCOLOR": "Titolo ricetta font e il colore del testo",
    "TEXT-DESCFONTANDTEXTCOLOR": "Titolo descrizione font e il colore del testo",
    "TEXT-CHOOSEPAGE": "Scegliere la pagina da visualizzare",
    "TEXT-SEARCHRECIPES": "Cerca ricette",
    "TEXT-CHOOSEPAGELAYOUT": "Scegliere il layout di pagina",
    "TEXT-BLOCK": "Blocco",
    "TEXT-LIST": "Elenco",
    "TEXT-GENBACK": "Contesto generale",
    "TEXT-BOXES": "Scatole",
    "TEXT-SEARCHBOXDESIGN": "Ricerca Box Progettazione",
    "TEXT-FILTERBOXDESIGN": "Filtro Box",
    "TEXT-BACKBUTTON": "Pulsante indietro",
    "TEXT-ICONCOLOR": "Icon Colore",

    "TEXT-CHOOSEELEMENTS": "Nascondere o visualizzare gli elementi",
    "TEXT-GENERALRBD": "Ricetta Generale Design Box",
    "TEXT-TAGSDESIGN": "Progettazione tag",
    "TEXT-GENERAL": "Generale",
    "TEXT-SECTIONS": "Sezioni",
    "TEXT-SERVSIZEANDTIME": "Servire dimensioni e tempo",
    "TEXT-BADGE": "Badge",
    "TEXT-TAGLABEL": "Etichetta tag",
    "TEXT-PANELTITLES": "Titoli pannello",
    "TEXT-RECIPECOMPTITLES":"Ricetta Titoli componente",
    "TEXT-INGRELISTS":"Elenchi ingredienti",
    "TEXT-DESCSECTION":"Sezione Descrizione",
    "TEXT-PANELDETAILS":"Dettagli pannello",
    "TEXT-FILTERBOX": "Scatola Filtro",
    "TEXT-RECIPEBOX": "Ricetta Box",

    "TEXT-NUTRISECTION": "Sezione nutrizionale",
    "TEXT-NUTRIFACTS": "Fatti Nutrizione",
    "TEXT-NUTRITION": "Nutrizione",
    "TEXT-AMOUNT": "Quantità per servizio",
    "TEXT-CALORIES": "Calorie",
    "TEXT-ECALORIES": "Immettere calorie totali per la ricetta",
    "TEXT-ShortCALORIES": "Ad es. 200",
    "TEXT-ErrCALORIES": "Le calorie a campo è opzionale e deve essere meno di 10 caratteri",
    "TEXT-FAT": "Grasso",
    "TEXT-EFAT": "Immettere il contenuto di grassi",
    "TEXT-ShortFAT": "Ad es. 14gms o 20%",
    "TEXT-ErrFAT": "Il grasso campo è opzionale e deve essere meno di 10 caratteri",
    "TEXT-CARBO": "Carboidrato",
    "TEXT-ECARBO": "Immettere il contenuto di carboidrati",
    "TEXT-ShortCARBO": "Ad es. 25gms o 70%",
    "TEXT-ErrCARBO": "Il carboidrato campo è opzionale e deve essere meno di 10 caratteri",
    "TEXT-PROTIEN": "Proteina",
    "TEXT-EPROTIEN": "Immettere il contenuto di proteina",
    "TEXT-ShortPROTIEN": "Ad es. 10gms o 10%",
    "TEXT-ErrPROTIEN": "La proteina campo è opzionale e deve essere meno di 10 caratteri",
    "TEXT-DISCLAIMER": "Disconoscimento",
    "TEXT-EDISCLAIMER": "Immettere disclaimer nutrizionale",
    "TEXT-ShortDISCLAIMER": "Ad es. Avviso: per mangiare la dieta giusta per i vostri obiettivi può tradursi in guadagni di aumentata e diminuita bodyfat.",
    "TEXT-ErrDISCLAIMER": "La clausola di esclusione della responsabilità il campo è opzionale e deve essere inferiore a 150 caratteri",
    "TEXT-TAGSANDTIMES": "Tag e volte",
    "TEXT-ErrRECIPENAME2": "Nome ricetta già in uso",
    "TEXT-SERVINGSPRECIPE" : "Porzioni per ricetta",
    "TEXT-AMOUNTPSERVING": "quantità per servizio",
    "TEXT-NUTSERV": "Porzione di cibo, calorie, ecc",
    "TEXT-NOTICETEXT": "Avviso di testo",


    "TEXT-SOCIALICONSCOLOR": "Icone sociale colore",
    "TEXT-SUPPORT": "Supporto",
    "TEXT-DEVELOPERINFO": "Developer Info",
    "TEXT-REVIEWTHEAPP": "Esaminare le app",
    "TEXT-REVIEWPARA": "Avete goduto l'app? Diffondere la parola e il tasso di noi nel mercato di app",
    "BUTTON-RATEUS": "Ci tasso",
    "TEXT-BY": "Da"

    });


    //$translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.useSanitizeValueStrategy(null); 
    $translateProvider.preferredLanguage('en');

})


app.controller('AppCtrl', ['$scope','$timeout','$http','$rootScope','$window','$translate','$location','$document', function($scope,$timeout,$http,$rootScope,$window,$translate,$location,$document) {

 /* $scope.lang = Wix.Utils.getLocale();*/
  var scope = this;
  scope.isvalue_message =true
/*  scope.defaultTabIndex = 0;
  scope.showSocialIcons=true;
  scope.showSearchPage=true;
  scope.showSocialIconsRecipePage=true;

  scope.showPageSelection=true
  scope.showSection1 = true
  scope.showSearchBoxSection =false
  scope.showFilterBoxSection=false
  scope.showRecipeBoxSection =false

  scope.showSection2=false
  scope.showDescriptionSection=false
  scope.showNutritionSection=false
  scope.showPanelTitlesSection=false
  scope.showPanelDetailsSection=false*/

/*Wix.addEventListener(Wix.Events.EDIT_MODE_CHANGE, function(e) {
        if (e.editMode == 'editor') {
          console.log("I am in Settings Page")
          Wix.Utils.navigateToSection({ sectionId : 'recipe_app' }, '/', function(error){
          });
        }
});*/

  $translate.use(Wix.Utils.getLocale() || 'en')

    $scope.languages = [{
        code: 'en',
        name: 'English'
    },{
        code: 'es',
        name: 'Español'
    },{
        code: 'pt',
        name: 'Português'
     },{
        code: 'fr',
        name: 'Français'
      },{
        code: 'it',
        name: 'Italiano'
     },{
        code: 'ru',
        name: 'русский' 
      },{
        code: 'hi',
        name: 'हिंदी'
     }];
$scope.selectLang = function(lang){
  $scope.selectedLang = lang;
  var langdata = {'key': 'appLang' , 'value' : lang.code+'!!'+lang.name }
   Wix.Settings.triggerSettingsUpdatedEvent(langdata, Wix.Utils.getOrigCompId());
  }
  $scope.toggleSwitchCtrl= {
    onChange: function(value)
    {
      var compId = Wix.Utils.getCompId();
      
      console.log("inside onchange function of toggleSwitchCtrl on 1638line")
      console.log(value);
      console.log("compId:")
      console.log(compId);
      console.log("hello");``
    }
    
  }
scope.langDropdownCtrl = {
    onChange: function(value) {
      var langdata = {'key': 'appLang' , 'value' : value }
      Wix.Settings.triggerSettingsUpdatedEvent(langdata, Wix.Utils.getOrigCompId());                      
    }                     
  }
var promiseGetData = $http.get("/getRecipe/" + Wix.Utils.getInstanceId());
    promiseGetData.then(function(payload){
      var recipes=payload.data;
      scope.trueRecipes = recipes.filter(function(element){return element.showRecipe==true});
      scope.theSettRecipeName =  scope.trueRecipes[0].UUID;
      $scope.getTheSettings();
      //scope.theSettRecipeName =  recipes[0].UUID;
    })
 $scope.getTheSettings = function () {
var promiseGetData = $http.get("/getSettings/" + Wix.Utils.getInstanceId());
    promiseGetData.then(function(payload){
      sett=payload.data;
      $scope.sett=payload.data
        if (sett.selectedDropdown =='recipepage') {
        scope.showSearchPage =false;
        scope.showPageSelection=true
        scope.showSection1 = false
        scope.showSearchBoxSection =false
        scope.showFilterBoxSection=false
        scope.showRecipeBoxSection =false
        scope.showSection2=true
        if (sett.disp_RecipeDetail_nutrition == true){scope.showNutribox = true}
        else {scope.showNutribox = false}  
        scope.showDescriptionSection=false
        scope.showNutritionSection=false
        scope.showPanelTitlesSection=false
        scope.showPanelDetailsSection=false

          $scope.refs.recipePageDropdown.setState({"value":"recipepage"});
          $scope.refs.searchPageDropdown.setState({"value":"recipepage"});
          $scope.refs.langDropdown.setState({"value":sett.appLangCode+"!!"+sett.appLang})
          $scope.refs.recipePageSearchBox.setValue(sett.disp_RecipePage_SearchBox)
          $scope.refs.recipePageSearchDrop.setValue(sett.disp_RecipePage_SearchDrop)
          $scope.refs.recipePageSocialShare.setValue(sett.disp_RecipePage_SocialShare)
          $scope.refs.RecipePage_tags.setValue(sett.disp_RecipePage_tags)
          $scope.refs.dispRecipePageSearchDropIngridentList.setValue(sett.disp_RecipePage_SearchDrop_Ingrident_List);
          $scope.refs.RecipeDetail_SocialShare.setValue(sett.disp_RecipeDetail_SocialShare)
          $scope.refs.RecipeDetail_Tags.setValue(sett.disp_RecipeDetail_Tags)
          $scope.refs.RecipeDetail_nutrition.setValue(sett.disp_RecipeDetail_nutrition)

      scope.changeSettingsPage()
      
        }
       else {
        scope.showSearchPage =true;

        scope.showPageSelection=true
        scope.showSection1 = true
        if (sett.disp_RecipePage_SearchBox == true){scope.showRecipePage_SearchBox = true}
        else {scope.showRecipePage_SearchBox = false}
          if (sett.disp_RecipePage_SearchDrop == true){scope.showRecipePage_SearchDrop = true}
        else {scope.showRecipePage_SearchDrop = false}
        scope.showSearchBoxSection =false
        scope.showFilterBoxSection=false
        scope.showRecipeBoxSection =false
        scope.showSection2=false
        scope.showDescriptionSection=false
        scope.showNutritionSection=false
        scope.showPanelTitlesSection=false
        scope.showPanelDetailsSection=false

          $scope.refs.searchPageDropdown.setState({"value":"searchrecipe"});
          $scope.refs.recipePageDropdown.setState({"value":"searchrecipe"});
          $scope.refs.cardUI.setState({"value":sett.selectedLayout})
          $scope.refs.langDropdown.setState({"value":sett.appLangCode+"!!"+sett.appLang})
          $scope.refs.recipePageSearchBox.setValue(sett.disp_RecipePage_SearchBox)
          $scope.refs.recipePageSearchDrop.setValue(sett.disp_RecipePage_SearchDrop)
          $scope.refs.recipePageSocialShare.setValue(sett.disp_RecipePage_SocialShare)
          $scope.refs.RecipePage_tags.setValue(sett.disp_RecipePage_tags)
          $scope.refs.dispRecipePageSearchDropIngridentList.setValue(sett.disp_RecipePage_SearchDrop_Ingrident_List);
          $scope.refs.RecipeDetail_SocialShare.setValue(sett.disp_RecipeDetail_SocialShare)
          $scope.refs.RecipeDetail_Tags.setValue(sett.disp_RecipeDetail_Tags)
          $scope.refs.RecipeDetail_nutrition.setValue(sett.disp_RecipeDetail_nutrition)
          if (sett.selectedLayout == "block")
          {scope.showGeneralRecipeBDBC = true}
          if (sett.selectedLayout == "list")
          {scope.showGeneralRecipeBDBC = false}
          //scope.changeSettingsPageOrig()
      }

      /*$timeout(function(){
         $scope.refs.searchPageDropdown.setState({"value": sett.selectedDropdown});
         $scope.refs.recipePageDropdown.setState({"value": sett.selectedDropdown});
      },0)*/ 

      //$scope.refs.panelTabs.setActiveTab($scope.sett.defaultTab);

    })
}

$timeout(function(){
   /* var urlParams = new URLSearchParams($window.location.search);
    var instanceValue = urlParams.get('instance')*/
    var instanceValue = getQueryVariable('instance');
    var pair = instanceValue.split('.');
    var data = pair[1];
    data = decodeURIComponent(data)
    var base64 = $window.atob(data);
    var base64obj = JSON.parse(base64)
    //console.log("This is the instance ID from code" +base64obj.instanceId)
    if (base64obj.vendorProductId == 'recipe_001')
    {
      scope.showUpgradeButton = false;
    }
    else
    {
      scope.showUpgradeButton = true;
    }
},0)

function getQueryVariable(variable) {
  var query = $window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == variable){return pair[1];}
  }
  return(false);
}
var counter=0;
  scope.onUpdate = function (key) {
    return function (value) {
      // showRecipe_dropDown_ingridentList for show the controller_index.js element
      // disp_RecipePage_SearchDrop_Ingrident_List for update the value in controller_settings.js element
      if (key == 'disp_RecipePage_SearchDrop_Ingrident_List')
      {
        if (value == true){scope.showRecipe_dropDown_ingridentList=true; $scope.sett.disp_RecipePage_SearchDrop_Ingrident_List = true;}
        else {$scope.sett.disp_RecipePage_SearchDrop_Ingrident_List = false;scope.showRecipe_dropDown_ingridentList=false;}
      }
      //edited end


      if (key == 'disp_RecipePage_SearchBox')
      {
        if (value == true){scope.showRecipePage_SearchBox=true;$scope.sett.disp_RecipePage_SearchBox = true;}
        else {scope.showRecipePage_SearchBox=false;$scope.sett.disp_RecipePage_SearchBox = false;}
      }
      if (key == 'disp_RecipePage_SearchDrop')
      {
        if (value == true){scope.showRecipePage_SearchDrop=true;$scope.sett.disp_RecipePage_SearchDrop = true;}
        else {scope.showRecipePage_SearchDrop=false;$scope.sett.disp_RecipePage_SearchDrop = false;}
      }
      if (key == 'disp_RecipePage_SocialShare')
      {
        if (value == true){scope.showRecipePage_SocialShare=true;$scope.sett.disp_RecipePage_SocialShare = true;}
        else {scope.showRecipePage_SocialShare=false;$scope.sett.disp_RecipePage_SocialShare = false;}
      }
      if (key == 'disp_RecipePage_tags')
      {
        if (value == true){scope.showRecipePage_tags=true;$scope.sett.disp_RecipePage_tags = true;}
        else {scope.showRecipePage_tags=false;$scope.sett.disp_RecipePage_tags = false;}
      }
      if (key == 'disp_RecipeDetail_SocialShare')
      {
        if (value == true){scope.showSocialIconsRecipeDetailPage=true;$scope.sett.disp_RecipeDetail_SocialShare = true;}
        else {scope.showSocialIconsRecipeDetailPage=false;$scope.sett.disp_RecipeDetail_SocialShare = false;}
      }
      if (key == 'disp_RecipeDetail_Tags')
      {
        if (value == true){scope.showRecipeDetail_Tags=true;$scope.sett.disp_RecipeDetail_Tags = true;}
        else {scope.showRecipeDetail_Tags=false;$scope.sett.disp_RecipeDetail_Tags = false;}
      }
      if (key == 'disp_RecipeDetail_nutrition')
      {
        if (value == true){scope.showNutribox=true;$scope.sett.disp_RecipeDetail_nutrition = true;}
        else {scope.showNutribox=false;$scope.sett.disp_RecipeDetail_nutrition = false;}
      }
       if (key == 'the_support_email')
      {
        scope.the_support_email = value
      }
       if (key == 'the_support_message')
      {
        scope.the_support_message = encodeURI(value)
        if (scope.the_support_message != "")
            {
                scope.isvalue_message = false
            }   
      }
       if (key == 'selectedLayout')
      {
        if (value == 'block')
            {
                //scope.changeSettingsPageOrig()
                //Wix.Utils.navigateToSection({ sectionId : 'recipe_app' },'/', function(error){});
                    scope.showGeneralRecipeBDBC = true
                    $scope.sett.selectedLayout = "block"
                /*$location.path('/');*/

            }
        else if(value == 'list')
            {
                //scope.changeSettingsPageOrig()
                scope.showGeneralRecipeBDBC = false
                $scope.sett.selectedLayout = "list"
            }
      }
      const data = {key: key, value: value};
      counter++;
      if(key!='the_support_email'&&key!='the_support_message'&&key!='selectedLayout'&&counter>9){
        $http.put("/updateSettings/" + Wix.Utils.getInstanceId(), $scope.sett).success(function(response){
          counter=0;
          $scope.sett[key]=response.settings[key];
          $scope.lang = $scope.sett.appLang;
          $scope.refs.langDropdown.setState({"value":$scope.sett.appLangCode+"!!"+$scope.sett.appLang})
            $scope.refs.recipePageSearchBox.setValue($scope.sett.disp_RecipePage_SearchBox)
            $scope.refs.recipePageSearchDrop.setValue($scope.sett.disp_RecipePage_SearchDrop)
            $scope.refs.recipePageSocialShare.setValue($scope.sett.disp_RecipePage_SocialShare)
            $scope.refs.RecipePage_tags.setValue($scope.sett.disp_RecipePage_tags)
            $scope.refs.RecipeDetail_SocialShare.setValue($scope.sett.disp_RecipeDetail_SocialShare)
            $scope.refs.RecipeDetail_Tags.setValue($scope.sett.disp_RecipeDetail_Tags)
            $scope.refs.RecipeDetail_nutrition.setValue($scope.sett.disp_RecipeDetail_nutrition)
            $scope.refs.dispRecipePageSearchDropIngridentList.setValue($scope.sett.disp_RecipePage_SearchDrop_Ingrident_List)
        },function(error){
          console.log();
        })
      }
      else{
        Wix.Settings.triggerSettingsUpdatedEvent(data, Wix.Utils.getOrigCompId());
      }
      //console.log(data.key);
      //console.log(data.value);
      //console.log(Wix.Utils.getOrigCompId());
      //console.log(data.value.color)
      }
  };

 scope.sendButton = function(){

       $http.get("/sendEmail/"+ scope.the_support_email+"/"+scope.the_support_message).success(function(response){
       });

       scope.showEmailMessage = true
      /* $scope.refs.supportEmail.setValue("")
       $scope.refs.supportMessage.setValue("")*/

  };

$timeout(function(){
    Wix.Settings.getDashboardAppUrl(function(url) {
      $scope.$apply(function(){
       $scope.dashURL= url
     })
    });
  },0)
  
  scope.openBilling = function(){
    Wix.Settings.openBillingPage();
  }

    scope.openReview = function(){
    Wix.Settings.openReviewInfo();
  }
  
  scope.onButtonClicked = function () {
    //console.log("Main button clicked - switch to tab #1");
    $scope.refs.panelTabs.setActiveTab(1);
  };
 

 scope.changeSettingsPage = function () {
  var theSettRecipeName = scope.theSettRecipeName;
  console.log(scope.theSettRecipeName)
  //Wix.Settings.refreshApp();

  Wix.Utils.navigateToSection({ sectionId : 'recipe_app' }, 'recipe/'+theSettRecipeName, function(error){});

    //$location.path('recipe/'+theSettRecipeName);
 };
  scope.changeSettingsPageOrig = function () {
    console.log("i am in search recipe orid")
    //Wix.Settings.refreshApp();
    
    Wix.Utils.navigateToSection({ sectionId : 'recipe_app' },'/', function(error){});
 
    /*$location.path('/');*/
 };
  scope.panelTabs = {
    onChange: function(value){
        if (value==2)
        {
          if (sett.selectedDropdown == 'searchrecipe')
          { scope.backSection1(); }
          else 
          { scope.backSection2(); }
        }
        var promiseGetData = $http.get("/getSettings/" + Wix.Utils.getInstanceId());
            promiseGetData.then(function(payload){ 
            $scope.sett=payload.data
            $scope.sett.defaultTab = value 
            $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), $scope.sett).success(function(response){
                //console.log(response);
                scope.showEmailMessage = false
                scope.isvalue_message =true
                $scope.refs.supportEmail.setValue("email@xyz.com")
                $scope.refs.supportMessage.setValue("") 
            });
        });
    }
  }
  scope.dropdownCtrl = {
    onChange: function(value) {
       if (value=='recipepage') {
        
        scope.showSearchPage =false;

        scope.showPageSelection=true
        scope.showSection1 = false
        scope.showSearchBoxSection =false
        scope.showFilterBoxSection=false
        scope.showRecipeBoxSection =false
        scope.showSection2=true
        scope.showDescriptionSection=false
        scope.showNutritionSection=false
        scope.showPanelTitlesSection=false
        scope.showPanelDetailsSection=false
      /*  $timeout(function(){*/
          $scope.refs.recipePageDropdown.setState({"value":"recipepage"});
          $scope.refs.searchPageDropdown.setState({"value":"recipepage"});
          var promiseGetData = $http.get("/getSettings/" + Wix.Utils.getInstanceId());
          promiseGetData.then(function(payload){
            sett=payload.data;
            $scope.sett=payload.data
            console.log("this is when recipedetail is selected")
            //console.log($scope.sett)
            $scope.lang = $scope.sett.appLang
            $scope.refs.langDropdown.setState({"value":sett.appLangCode+"!!"+sett.appLang})
            $scope.refs.recipePageSearchBox.setValue(sett.disp_RecipePage_SearchBox)
            $scope.refs.recipePageSearchDrop.setValue(sett.disp_RecipePage_SearchDrop)
            $scope.refs.recipePageSocialShare.setValue(sett.disp_RecipePage_SocialShare)
            $scope.refs.RecipePage_tags.setValue(sett.disp_RecipePage_tags)
            $scope.refs.RecipeDetail_SocialShare.setValue(sett.disp_RecipeDetail_SocialShare)
            $scope.refs.dispRecipePageSearchDropIngridentList.setValue(sett.disp_RecipePage_SearchDrop_Ingrident_List);
            $scope.refs.RecipeDetail_Tags.setValue(sett.disp_RecipeDetail_Tags)
            $scope.refs.RecipeDetail_nutrition.setValue(sett.disp_RecipeDetail_nutrition)
            Wix.Styles.getStyleParams( function(styleParams) {
              console.log(styleParams.colors.myBackgroundColor3)
                console.log(styleParams.colors.myBackgroundColor3.value)
               console.log(rgb2hex(styleParams.colors.myBackgroundColor3.value))
               console.log((styleParams.colors.myBackgroundColor3.value).replace(/^.*,(.+)\)/,'$1'))
               if (/^#[0-9A-F]{6}$/i.test(styleParams.colors.myBackgroundColor3.value) == true)
               {
                $scope.refs.RefRecipe_myBackgroundColor3.setState({colorData : {"alpha":1,"color":styleParams.colors.myBackgroundColor3.value}})
                $scope.refs.RefSearch_myBackgroundColor3.setState({colorData : {"alpha":1,"color":styleParams.colors.myBackgroundColor3.value}})
               }
               else
               {
                $scope.refs.RefRecipe_myBackgroundColor3.setState({colorData : {"alpha":(styleParams.colors.myBackgroundColor3.value).replace(/^.*,(.+)\)/,'$1'),"color":rgb2hex(styleParams.colors.myBackgroundColor3.value)}})
                $scope.refs.RefSearch_myBackgroundColor3.setState({colorData : {"alpha":(styleParams.colors.myBackgroundColor3.value).replace(/^.*,(.+)\)/,'$1'),"color":rgb2hex(styleParams.colors.myBackgroundColor3.value)}})
               }
            });
            $scope.sett.selectedDropdown = "recipepage"
            //console.log($scope.sett)
            $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), $scope.sett).success(function(response){
            console.log(response);
            scope.changeSettingsPage()
            //$window.location.reload();
          })
          })
       /* },0)*/

      }
       else {
        
        scope.showSearchPage =true;

        scope.showPageSelection=true
        scope.showSection1 = true
        scope.showSearchBoxSection =false
        scope.showFilterBoxSection=false
        scope.showRecipeBoxSection =false
        scope.showSection2=false
        scope.showDescriptionSection=false
        scope.showNutritionSection=false
        scope.showPanelTitlesSection=false
        scope.showPanelDetailsSection=false
        /* $timeout(function(){*/
          $scope.refs.searchPageDropdown.setState({"value":"searchrecipe"});
          $scope.refs.recipePageDropdown.setState({"value":"searchrecipe"});
          var promiseGetData = $http.get("/getSettings/" + Wix.Utils.getInstanceId());
          promiseGetData.then(function(payload){
            sett=payload.data;
            $scope.sett=payload.data
            console.log("this is when recipesearch is selected")
            console.log($scope.sett)
            $scope.lang = $scope.sett.appLang
            $scope.refs.langDropdown.setState({"value":sett.appLangCode+"!!"+sett.appLang})
            $scope.refs.recipePageSearchBox.setValue(sett.disp_RecipePage_SearchBox)
            $scope.refs.recipePageSearchDrop.setValue(sett.disp_RecipePage_SearchDrop)
            $scope.refs.recipePageSocialShare.setValue(sett.disp_RecipePage_SocialShare)
            $scope.refs.RecipePage_tags.setValue(sett.disp_RecipePage_tags)
            $scope.refs.dispRecipePageSearchDropIngridentList.setValue(sett.disp_RecipePage_SearchDrop_Ingrident_List);
            $scope.refs.RecipeDetail_SocialShare.setValue(sett.disp_RecipeDetail_SocialShare)
            $scope.refs.RecipeDetail_Tags.setValue(sett.disp_RecipeDetail_Tags)
            $scope.refs.RecipeDetail_nutrition.setValue(sett.disp_RecipeDetail_nutrition)
            Wix.Styles.getStyleParams( function(styleParams1) {
                console.log(styleParams1.colors.myBackgroundColor3)
                console.log(styleParams1.colors.myBackgroundColor3.value)
                console.log(rgb2hex(styleParams1.colors.myBackgroundColor3.value))
                console.log((styleParams1.colors.myBackgroundColor3.value).replace(/^.*,(.+)\)/,'$1'))
                if (/^#[0-9A-F]{6}$/i.test(styleParams1.colors.myBackgroundColor3.value) == true)
               {
                $scope.refs.RefRecipe_myBackgroundColor3.setState({colorData : {"alpha":1,"color":styleParams1.colors.myBackgroundColor3.value}})
                $scope.refs.RefSearch_myBackgroundColor3.setState({colorData : {"alpha":1,"color":styleParams1.colors.myBackgroundColor3.value}})
               }
               else
               {
                $scope.refs.RefRecipe_myBackgroundColor3.setState({colorData : {"alpha":(styleParams1.colors.myBackgroundColor3.value).replace(/^.*,(.+)\)/,'$1'),"color":rgb2hex(styleParams1.colors.myBackgroundColor3.value)}})
                $scope.refs.RefSearch_myBackgroundColor3.setState({colorData : {"alpha":(styleParams1.colors.myBackgroundColor3.value).replace(/^.*,(.+)\)/,'$1'),"color":rgb2hex(styleParams1.colors.myBackgroundColor3.value)}})
              }
            });
            $scope.sett.selectedDropdown = "searchrecipe"
            $http.put("/updateSettings/"+ Wix.Utils.getInstanceId(), $scope.sett).success(function(response){
            console.log(response);
            //scope.changeSettingsPageOrig()
             //$window.location.reload();
          })
          })
     /*    },0)*/
        
      }                  
    }                     
  }
function rgb2hex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}
scope.SB = function () {
        scope.showPageSelection=false
        scope.showSection1 = false
        scope.showSearchBoxSection =true
        scope.showFilterBoxSection=false
        scope.showRecipeBoxSection =false
        scope.showSection2=false
        scope.showDescriptionSection=false
        scope.showNutritionSection=false
        scope.showPanelTitlesSection=false
        scope.showPanelDetailsSection=false
};
scope.FB = function () {
        scope.showPageSelection=false
        scope.showSection1 = false
        scope.showSearchBoxSection =false
        scope.showFilterBoxSection=true
        scope.showRecipeBoxSection =false
        scope.showSection2=false
        scope.showDescriptionSection=false
        scope.showNutritionSection=false
        scope.showPanelTitlesSection=false
        scope.showPanelDetailsSection=false
};
scope.RB = function () {
        scope.showPageSelection=false
        scope.showSection1 = false
        scope.showSearchBoxSection =false
        scope.showFilterBoxSection=false
        scope.showRecipeBoxSection =true
        var promiseGetData = $http.get("/getSettings/" + Wix.Utils.getInstanceId());
        promiseGetData.then(function(payload){
          sett=payload.data;
          if (sett.disp_RecipePage_SocialShare == true){scope.showRecipePage_SocialShare = true}
          else {scope.showRecipePage_SocialShare = false}
          if (sett.disp_RecipePage_tags == true){scope.showRecipePage_tags = true}
          else {scope.showRecipePage_tags = false}
        })
        scope.showSection2=false
        scope.showDescriptionSection=false
        scope.showNutritionSection=false
        scope.showPanelTitlesSection=false
        scope.showPanelDetailsSection=false
};
scope.backSection1 = function () {
        scope.showPageSelection=true
        scope.showSection1 = true
        scope.showSearchBoxSection =false
        scope.showFilterBoxSection=false
        scope.showRecipeBoxSection =false
        scope.showSection2=false
        scope.showDescriptionSection=false
        scope.showNutritionSection=false
        scope.showPanelTitlesSection=false
        scope.showPanelDetailsSection=false
};

scope.DS = function () {
        scope.showPageSelection=false
        scope.showSection1 = false
        scope.showSearchBoxSection =false
        scope.showFilterBoxSection=false
        scope.showRecipeBoxSection =false
        scope.showSection2=false
        scope.showDescriptionSection=true
        var promiseGetData = $http.get("/getSettings/" + Wix.Utils.getInstanceId());
        promiseGetData.then(function(payload){
          sett=payload.data;
          if (sett.disp_RecipeDetail_SocialShare == true){scope.showSocialIconsRecipeDetailPage = true}
          else {scope.showSocialIconsRecipeDetailPage = false}
          if (sett.disp_RecipeDetail_Tags == true){scope.showRecipeDetail_Tags = true}
          else {scope.showRecipeDetail_Tags = false}
        })
        scope.showNutritionSection=false
        scope.showPanelTitlesSection=false
        scope.showPanelDetailsSection=false
};

scope.NUT = function () {
        scope.showPageSelection=false
        scope.showSection1 = false
        scope.showSearchBoxSection =false
        scope.showFilterBoxSection=false
        scope.showRecipeBoxSection =false
        scope.showSection2=false
        scope.showDescriptionSection=false
        scope.showNutritionSection=true
        scope.showPanelTitlesSection=false
        scope.showPanelDetailsSection=false
};
scope.PTS = function () {
        scope.showPageSelection=false
        scope.showSection1 = false
        scope.showSearchBoxSection =false
        scope.showFilterBoxSection=false
        scope.showRecipeBoxSection =false
        scope.showSection2=false
        scope.showDescriptionSection=false
        scope.showNutritionSection=false
        scope.showPanelTitlesSection=true
        scope.showPanelDetailsSection=false
};
scope.PDS = function () {
        scope.showPageSelection=false
        scope.showSection1 = false
        scope.showSearchBoxSection =false
        scope.showFilterBoxSection=false
        scope.showRecipeBoxSection =false
        scope.showSection2=false
        scope.showDescriptionSection=false
        scope.showNutritionSection=false
        scope.showPanelTitlesSection=false
        scope.showPanelDetailsSection=true
        scope.showExpertTips = true
        if(scope.trueRecipes[0].expertTips === undefined || scope.trueRecipes[0].expertTips.length == 0){scope.showExpertTips = false}
};
scope.backSection2 = function () {
        scope.showPageSelection=true
        scope.showSection1 = false
        scope.showSearchBoxSection =false
        scope.showFilterBoxSection=false
        scope.showRecipeBoxSection =false
        scope.showSection2=true
        scope.showDescriptionSection=false
        scope.showNutritionSection=false
        scope.showPanelTitlesSection=false
        scope.showPanelDetailsSection=false
};
scope.emailInputCtrl = { 
        validate: function(val){
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(val.toLowerCase());
        }    
            
}
/*scope.blockClicked = function () {
    scope.theCardType = "defaultCard"
    scope.theListCardType = "otherCard"
    scope.showGeneralRecipeBDBC = true
    $scope.sett.selectedLayout = "block"
    const data1 = {key: "selectedLayout", value: "block"};
    Wix.Settings.triggerSettingsUpdatedEvent(data1, Wix.Utils.getOrigCompId());
}

scope.listClicked = function () {
  scope.theCardType = "otherCard"
  scope.theListCardType = "defaultCard"
  scope.showGeneralRecipeBDBC = false
  $scope.sett.selectedLayout = "list"
  const data2 = {key: "selectedLayout", value: "list"};
    Wix.Settings.triggerSettingsUpdatedEvent(data2, Wix.Utils.getOrigCompId());

}*/

/* $timeout(function(){
    $('.ui.dropdown').dropdown();
 },0)*/


}]);
