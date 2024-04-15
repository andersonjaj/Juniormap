var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_mapadevenezuelasimplificado77_1 = new ol.format.GeoJSON();
var features_mapadevenezuelasimplificado77_1 = format_mapadevenezuelasimplificado77_1.readFeatures(json_mapadevenezuelasimplificado77_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mapadevenezuelasimplificado77_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mapadevenezuelasimplificado77_1.addFeatures(features_mapadevenezuelasimplificado77_1);
var lyr_mapadevenezuelasimplificado77_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mapadevenezuelasimplificado77_1, 
                style: style_mapadevenezuelasimplificado77_1,
                popuplayertitle: "mapa de venezuela simplificado 7-7",
                interactive: true,
                title: '<img src="styles/legend/mapadevenezuelasimplificado77_1.png" /> mapa de venezuela simplificado 7-7'
            });
var format_NOMBRE_2 = new ol.format.GeoJSON();
var features_NOMBRE_2 = format_NOMBRE_2.readFeatures(json_NOMBRE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NOMBRE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NOMBRE_2.addFeatures(features_NOMBRE_2);
var lyr_NOMBRE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NOMBRE_2, 
                style: style_NOMBRE_2,
                popuplayertitle: "NOMBRE",
                interactive: true,
                title: '<img src="styles/legend/NOMBRE_2.png" /> NOMBRE'
            });
var format_Banesco_3 = new ol.format.GeoJSON();
var features_Banesco_3 = format_Banesco_3.readFeatures(json_Banesco_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Banesco_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Banesco_3.addFeatures(features_Banesco_3);
var lyr_Banesco_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Banesco_3, 
                style: style_Banesco_3,
                popuplayertitle: "Banesco",
                interactive: true,
                title: '<img src="styles/legend/Banesco_3.png" /> Banesco'
            });
var format_Camino_4 = new ol.format.GeoJSON();
var features_Camino_4 = format_Camino_4.readFeatures(json_Camino_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Camino_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Camino_4.addFeatures(features_Camino_4);
var lyr_Camino_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Camino_4, 
                style: style_Camino_4,
                popuplayertitle: "Camino",
                interactive: true,
                title: '<img src="styles/legend/Camino_4.png" /> Camino'
            });

lyr_OSMStandard_0.setVisible(true);lyr_mapadevenezuelasimplificado77_1.setVisible(true);lyr_NOMBRE_2.setVisible(true);lyr_Banesco_3.setVisible(true);lyr_Camino_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_mapadevenezuelasimplificado77_1,lyr_NOMBRE_2,lyr_Banesco_3,lyr_Camino_4];
lyr_mapadevenezuelasimplificado77_1.set('fieldAliases', {'osm_id': 'osm_id', 'boundary': 'boundary', 'admin_level': 'admin_level', 'parents': 'parents', 'name': 'name', 'local_name': 'local_name', 'name_en': 'name_en', });
lyr_NOMBRE_2.set('fieldAliases', {'id': 'id', 'INCES': 'INCES', });
lyr_Banesco_3.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', });
lyr_Camino_4.set('fieldAliases', {'id': 'id', });
lyr_mapadevenezuelasimplificado77_1.set('fieldImages', {'osm_id': 'Range', 'boundary': 'TextEdit', 'admin_level': 'Range', 'parents': 'TextEdit', 'name': 'TextEdit', 'local_name': 'TextEdit', 'name_en': 'TextEdit', });
lyr_NOMBRE_2.set('fieldImages', {'id': 'TextEdit', 'INCES': 'TextEdit', });
lyr_Banesco_3.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', });
lyr_Camino_4.set('fieldImages', {'id': 'TextEdit', });
lyr_mapadevenezuelasimplificado77_1.set('fieldLabels', {'osm_id': 'no label', 'boundary': 'no label', 'admin_level': 'no label', 'parents': 'no label', 'name': 'no label', 'local_name': 'no label', 'name_en': 'no label', });
lyr_NOMBRE_2.set('fieldLabels', {'id': 'no label', 'INCES': 'no label', });
lyr_Banesco_3.set('fieldLabels', {'id': 'no label', 'nombre': 'no label', });
lyr_Camino_4.set('fieldLabels', {'id': 'no label', });
lyr_Camino_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});