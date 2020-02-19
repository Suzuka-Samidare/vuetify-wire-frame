import axios from 'axios'

export const getIdolProfile = ()  => {
  // SPARQL access
  const endPoint = 'https://sparql.crssnky.xyz/spql/imas/query';

  // const query = `PREFIX schema: <http://schema.org/>
  // PREFIX imas: <https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#>
  // PREFIX foaf: <http://xmlns.com/foaf/0.1/>
  // PREFIX rdfs:  <http://www.w3.org/2000/01/rdf-schema#>

  // SELECT *
  // WHERE {
  //     ?data rdfs:label ?label;
  //     schema:gender ?gender;
  //     imas:Title ?title;
  //     imas:cv ?cv .
  //     OPTIONAL { ?data foaf:age ?age . }
  //     OPTIONAL { ?data schema:birthDate ?birthDate . }
  //     OPTIONAL { ?data schema:birthPlace ?birthPlace . }
  //     OPTIONAL { ?data imas:Constellation ?constellation . }
  //     OPTIONAL { ?data schema:height ?height . }
  //     OPTIONAL { ?data schema:weight ?weight . }
  //     OPTIONAL { ?data imas:BloodType ?bloodType . }
  //     OPTIONAL { ?data imas:Color ?color . }
  //     OPTIONAL { ?data imas:Handedness ?handedness . }
  //     FILTER(LANG(?cv) = 'ja')
  // }`;

  const query = `PREFIX schema: <http://schema.org/>
  PREFIX imas: <https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#>
  PREFIX foaf: <http://xmlns.com/foaf/0.1/>
  PREFIX rdfs:  <http://www.w3.org/2000/01/rdf-schema#>

  SELECT
  ?data ?label ?birthDate ?birthPlace ?gender ?height ?weight ?age ?bloodType ?color ?constellation ?handedness
  ?title ?cv ?familyName ?givenName ?alternateName ?familyNameKana ?givenNameKana ?alternateNameKana
  ?bust ?waist ?hip ?attribute ?division ?description ?type ?category ?shoeSize
  (GROUP_CONCAT(distinct ?Favorite;separator=",") as ?favorite)
  (GROUP_CONCAT(distinct ?Hobby;separator=",") as ?hobby)
  (GROUP_CONCAT(distinct ?Talent;separator=",") as ?talent)
  WHERE {
    ?data rdfs:label ?label;
    schema:gender ?gender;
    imas:Title ?title;
    imas:cv ?cv .
    OPTIONAL { ?data foaf:age ?age . }
    OPTIONAL { ?data schema:birthDate ?birthDate . }
    OPTIONAL { ?data schema:birthPlace ?birthPlace . }
    OPTIONAL { ?data imas:Constellation ?constellation . }
    OPTIONAL { ?data imas:Hobby ?Hobby . }
    OPTIONAL { ?data schema:height ?height . }
    OPTIONAL { ?data schema:weight ?weight . }
    OPTIONAL { ?data imas:BloodType ?bloodType . }
    OPTIONAL { ?data imas:Color ?color . }
    OPTIONAL { ?data imas:Handedness ?handedness . }
    OPTIONAL { ?data schema:familyName ?familyName . FILTER(LANG(?familyName) = 'ja') }
    OPTIONAL { ?data schema:givenName ?givenName . FILTER(LANG(?givenName) = 'ja') }
    OPTIONAL { ?data schema:alternateName ?alternateName . FILTER(LANG(?alternateName) = 'ja') }
    OPTIONAL { ?data imas:familyNameKana ?familyNameKana . }
    OPTIONAL { ?data imas:givenNameKana ?givenNameKana . }
    OPTIONAL { ?data imas:alternateNameKana ?alternateNameKana . }
    OPTIONAL { ?data imas:Bust ?bust . }
    OPTIONAL { ?data imas:Waist ?waist . }
    OPTIONAL { ?data imas:Hip ?hip . }
    OPTIONAL { ?data imas:Talent ?Talent . }
    OPTIONAL { ?data imas:Attribute ?attribute . }
    OPTIONAL { ?data imas:Division ?division . }
    OPTIONAL { ?data imas:Favorite ?Favorite . }
    OPTIONAL { ?data schema:description ?description . }
    OPTIONAL { ?data imas:Type ?type . }
    OPTIONAL { ?data imas:Category ?category . }
    OPTIONAL { ?data imas:ShoeSize ?shoeSize . }
    FILTER(LANG(?cv) = 'ja')
  }
  GROUP BY
  ?data ?label ?birthDate ?birthPlace ?gender ?height ?weight ?age ?bloodType ?color ?constellation ?handedness
  ?title ?cv ?familyName ?givenName ?alternateName ?familyNameKana ?givenNameKana ?alternateNameKana
  ?bust ?waist ?hip ?attribute ?division ?description ?type ?category ?shoeSize`;

  return axios.get(`${endPoint}?query=${encodeURIComponent(query)}`)

  // const originData = axios.get(`${endPoint}?query=${encodeURIComponent(query)}`)
  //   .then(res => {
  //     return res.data.results.bindings
  //   })
  //   .catch(err => {
  //     alert(err)
  //   })
  // /* eslint-disable no-console */
  // console.log(originData)
  // return originData
}