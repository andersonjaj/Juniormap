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
var format_guyanasimplificado44_2 = new ol.format.GeoJSON();
var features_guyanasimplificado44_2 = format_guyanasimplificado44_2.readFeatures(json_guyanasimplificado44_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_guyanasimplificado44_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_guyanasimplificado44_2.addFeatures(features_guyanasimplificado44_2);
var lyr_guyanasimplificado44_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_guyanasimplificado44_2, 
                style: style_guyanasimplificado44_2,
                popuplayertitle: "guyana simplificado 4-4",
                interactive: true,
                title: '<img src="styles/legend/guyanasimplificado44_2.png" /> guyana simplificado 4-4'
            });

lyr_OSMStandard_0.setVisible(true);lyr_mapadevenezuelasimplificado77_1.setVisible(true);lyr_guyanasimplificado44_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_mapadevenezuelasimplificado77_1,lyr_guyanasimplificado44_2];
lyr_mapadevenezuelasimplificado77_1.set('fieldAliases', {'osm_id': 'osm_id', 'boundary': 'boundary', 'admin_level': 'admin_level', 'parents': 'parents', 'name': 'name', 'local_name': 'local_name', 'name_en': 'name_en', });
lyr_guyanasimplificado44_2.set('fieldAliases', {'osm_id': 'osm_id', 'boundary': 'boundary', 'admin_level': 'admin_level', 'parents': 'parents', 'name': 'name', 'local_name': 'local_name', 'name_en': 'name_en', });
lyr_mapadevenezuelasimplificado77_1.set('fieldImages', {'osm_id': '', 'boundary': '', 'admin_level': '', 'parents': '', 'name': '', 'local_name': '', 'name_en': '', });
lyr_guyanasimplificado44_2.set('fieldImages', {'osm_id': '', 'boundary': '', 'admin_level': '', 'parents': '', 'name': '', 'local_name': '', 'name_en': '', });
lyr_mapadevenezuelasimplificado77_1.set('fieldLabels', {'osm_id': 'no label', 'boundary': 'no label', 'admin_level': 'no label', 'parents': 'no label', 'name': 'no label', 'local_name': 'no label', 'name_en': 'no label', });
lyr_guyanasimplificado44_2.set('fieldLabels', {'osm_id': 'no label', 'boundary': 'no label', 'admin_level': 'no label', 'parents': 'no label', 'name': 'no label', 'local_name': 'no label', 'name_en': 'no label', });
lyr_guyanasimplificado44_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});