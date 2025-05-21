//Fonctions de builder de QUERY SQL avec une limite à 100 résultats max
var apiURL = `https://ressources.data.sncf.com/api/explore/v2.1/catalog/datasets/tarifs-tgv-inoui-ouigo/records?limit=100`

//Fonction pour ajouter une clause SELECT à un appel API - ajouter un paramètre &select=paramètre
//Ex: https://ressources.data.sncf.com/api/explore/v2.1/catalog/datasets/tarifs-tgv-inoui-ouigo/records?limit=100&select=gare_origine 
//Ex d'usage : selectAPI(apiURL,"gare_origine")
function selectAPI(apiURL,fieldToSearch){
	var selectURL = apiURL.concat("&select=", fieldToSearch);
	return selectURL
}

//Fonction pour ajouter une clause WHERE à un appel API - Ajouter un paramètre &where=paramètre
//Ex : https://ressources.data.sncf.com/api/explore/v2.1/catalog/datasets/tarifs-tgv-inoui-ouigo/records?where=gare_origine="MONTBARD"&limit=100
//Ex d'usage : whereAPI(apiURL,"gare_origine","MONTBARD")
function whereAPI(apiURL,fieldToSearch, valueToSearch){
	var whereURL = apiURL.concat("&where=",fieldToSearch,"=\"",valueToSearch,"\"")
	return whereURL
}
//Fonction pour ajouter une clause OR à un appel API - Ajouter un paramètre or , à utiliser immédiatement après whereAPI
//Ex : https://ressources.data.sncf.com/api/explore/v2.1/catalog/datasets/tarifs-tgv-inoui-ouigo/records?where= gare_origine="MONTBARD" or gare_destination="MONTBARD"&limit=100
//Ex d'usage : orAPI(apiURL,"gare_destination","MONTBARD")
function orAPI(apiURL,fieldOr,valueOr){
	var orURL = apiURL.concat(" or ", fieldOr,"=\"",valueOr,"\"")
	return orURL
}

//Fonction pour ajouter une clause AND à un appel API - Ajouter un paramètre and , à utiliser immédiatement après whereAPI
//Ex : https://ressources.data.sncf.com/api/explore/v2.1/catalog/datasets/tarifs-tgv-inoui-ouigo/records?where= gare_origine="MONTBARD" and gare_destination="AEROPORT CDG2 TGV ROISSY"&limit=100
//Ex d'usage : andAPI(apiURL,"gare_destination","AEROPORT CDG2 TGV ROISSY")
function andAPI(apiURL,fieldAnd,valueAnd){
	var andURL = apiURL.concat(" and ", fieldAnd,"=\"",valueAnd,"\"")
	return andURL
}

////Fonction pour ajouter une clause GROUP BY à un appel API - Ajouter un paramètre &group_by=
//Ex : https://ressources.data.sncf.com/api/explore/v2.1/catalog/datasets/tarifs-tgv-inoui-ouigo/records?where=gare_origine="MONTBARD" AND gare_destination = "AEROPORT CDG2 TGV ROISSY"&group_by=gare_origine&limit=100
//Ex d'usage : groupByAPI(apiURL,"gare_origine")
function groupByAPI(apiURL,groupField){
	var groupURL = apiURL.concat("&group_by=",groupField)
	return groupURL
}

////Fonction pour ajouter une clause ORDER BY à un appel API - Ajouter un paramètre &order_by=
//Ex : https://ressources.data.sncf.com/api/explore/v2.1/catalog/datasets/tarifs-tgv-inoui-ouigo/records?where=gare_origine="MONTBARD" AND gare_destination = "AEROPORT CDG2 TGV ROISSY"&order_by=gare_origine&limit=100
//Ex d'usage : orderByAPI(apiURL,"gare_origine")
function orderByAPI(apiURL,orderField){
	var orderURL = apiURL.concat("&order_by=",orderField)
	return orderURL
}

////Fonction pour ajouter un offset à un appel API - Ajouter un paramètre &offset=
//Ex : https://ressources.data.sncf.com/api/explore/v2.1/catalog/datasets/tarifs-tgv-inoui-ouigo/records?where=gare_origine="MONTBARD" AND gare_destination = "AEROPORT CDG2 TGV ROISSY"&order_by=gare_origine&limit=100&offset=1
//Ex d'usage : offsetAPI(apiURL,1)
function offsetAPI(apiURL,offset){
	var offsetURL = apiURL.concat("&offset=",offset)
	return offsetURL
}
