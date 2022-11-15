
            var map;
            var lyrOSM;
            var lyrWatercolor;
            var lyrTopo;
            var lyrImagery;
            var lyrOutdoors;
            var lyrSearch;
            var lyrMarkerCluster;
            var mrkCurrentLocation;
            var fgpDrawnItems;
            var ctlAttribute;
            var ctlScale;
            var ctlMouseposition;
            var ctlMeasure;
            var ctlEasybutton;
            var ctlSidebar;
            var ctlLayers;
            var ctlDraw;
            var ctlStyle;
            var ctlLegend;
            var ctlPrint;
            var ctlPrint2;
            var ctlGroupLayer;
            var objBasemaps;
            var objOverlays;
   
            var layergroup;
            
            // $(document).ready(function(){
                
                //  ********* Map Initialization ****************
                
                map = L.map('mapdiv', {center:[-2.0,29.98], zoom:8.4, attributionControl:false});
                
                ctlSidebar = L.control.sidebar('side-bar').addTo(map);
                ctlSidebar.toggle();
                ctlEasybutton = L.easyButton('glyphicon-transfer', function(){
                   ctlSidebar.toggle(); 
                }).addTo(map);
                
                ctlAttribute = L.control.attribution().addTo(map);
                ctlAttribute.addAttribution('OSM');
                ctlAttribute.addAttribution('&copy; <a href="http://datatale.com">Lynn Chepcheng LLC</a>');
                
                ctlScale = L.control.scale({position:'bottomleft', metric:true,imperical:false, maxWidth:200}).addTo(map);
           ctlMouseposition = L.control.mousePosition().addTo(map);
                ctlMeasure = L.control.polylineMeasure().addTo(map);
             

                    
                //   *********** Layer Initialization **********
                
               
                var Stadia_AlidadeSmoothDark = L.tileLayer('http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
                  );
                lyrOSM = L.tileLayer.provider('OpenStreetMap.Mapnik');
                map.addLayer(Stadia_AlidadeSmoothDark);
               
                fgpDrawnItems = new L.FeatureGroup();
                fgpDrawnItems.addTo(map);
                
                      
                
                let breaks = [0,22.7,36.7,45.6,56.5,100];
                let colors =  ['#edf8fb','#b2e2e2','#66c2a4','#2ca25f','#006d2c'];
                function towns_color(d) {
                for(let i = 0; i < breaks.length; i++) {
                if(d > breaks[i] && d <= breaks[i+1]) {
                return colors[i];
                }
                }
                }
                let breaks_agr1 = [0,55.3,71.9,83.1,90.4,100];
                let colorsagri =  ['#edf8fb','#b2e2e2','#66c2a4','#2ca25f','#006d2c'];
                function towns_color1(d) {
                for(let i = 0; i < breaks_agr1.length; i++) {
                if(d > breaks_agr1[i] && d <= breaks_agr1[i+1]) {
                return colorsagri[i];
                }
                }
                }
                let breaks_agr2 = [0,23.9,36.1,48,64,100];
                let colorsagri2 = ['#edf8fb','#b2e2e2','#66c2a4','#2ca25f','#006d2c'];
                function towns_color2(d) {
                for(let i = 0; i < breaks_agr2.length; i++) {
                if(d > breaks_agr2[i] && d <= breaks_agr2[i+1]) {
                return colorsagri2[i];
                }
                }
                }
                let breaks_agr3 = [0,20,24.1,32.2,42.8,100];
                let colorsagri3 =  ['#edf8fb','#b2e2e2','#66c2a4','#2ca25f','#006d2c'];
                function towns_color3(d) {
                for(let i = 0; i < breaks_agr3.length; i++) {
                if(d > breaks_agr3[i] && d <= breaks_agr3[i+1]) {
                return colorsagri3[i];
                }
                }
                }
                
                
                let breaks_Expo = [0,0.4,0.42,0.45,0.49,100];
                let colorsexpo =  ['#edf8fb','#b2e2e2','#66c2a4','#2ca25f','#006d2c'];
                function towns_colora(d) {
                for(let i = 0; i < breaks_Expo.length; i++) {
                if(d > breaks_Expo[i] && d <= breaks_Expo[i+1]) {
                return colorsexpo[i];
                }
                }
                }
              


                // styling layers
                function towns_style(feature) {
                                    return {
                fillColor: towns_color(feature.properties.Agricultur),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                                }

                  function agri1_style(feature) {
                                    return {
                fillColor: towns_color1(feature.properties.Agricult_1),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                                }
                function agri2_style(feature) {
                                    return {
                fillColor: towns_color2(feature.properties.Agricult_2),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                                }
                function agri3_style(feature) {
                                    return {
                fillColor: towns_color3(feature.properties.Agricult_3),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                                }
                
          
             
                                //  GeoJson Data Variables
               
                            // ***AGRICULTURE***
                // Agriculture input use
                let breaks_agr4 = [0,31.6,66.2,78.5,89.3,100];
                let colorsagri4 =  ['#edf8fb','#b2e2e2','#66c2a4','#2ca25f','#006d2c'];
                function towns_color4(d) {
                for(let i = 0; i < breaks_agr4.length; i++) {
                if(d > breaks_agr4[i] && d <= breaks_agr4[i+1]) {
                return colorsagri4[i];
                }
                }
                }
                function LandProtect_style(feature) {
                                    return {
                fillColor: towns_color4(feature.properties.Erosion),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                }
                let breaks_agr5 = [0,23.9,36.1,48,64,100];
                let colorsagri5 =  ['#edf8fb','#b2e2e2','#66c2a4','#2ca25f','#006d2c'];
                function towns_color5(d) {
                for(let i = 0; i < breaks_agr5.length; i++) {
                if(d > breaks_agr5[i] && d <= breaks_agr5[i+1]) {
                return colorsagri5[i];
                }
                }
                }
                function agrof_style(feature) {
                                    return {
                fillColor: towns_color5(feature.properties.Agroforestry),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                }
                let breaks_agr6 = [0,6.2,11.3,16.5,25.1,100];
                let colorsagri6 =  ['#edf8fb','#b2e2e2','#66c2a4','#2ca25f','#006d2c'];
                function towns_color6(d) {
                for(let i = 0; i < breaks_agr6.length; i++) {
                if(d > breaks_agr6[i] && d <= breaks_agr6[i+1]) {
                return colorsagri6[i];
                }
                }
                }
                function Irrig_style(feature) {
                                    return {
                fillColor: towns_color6(feature.properties.Irrigation),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                }
                let breaks_agr7 = [0,23.9,36.1,48,64,100];
                let colorsagri7 =  ['#edf8fb','#b2e2e2','#66c2a4','#2ca25f','#006d2c'];
                function towns_color7(d) {
                for(let i = 0; i < breaks_agr7.length; i++) {
                if(d > breaks_agr7[i] && d <= breaks_agr7[i+1]) {
                return colorsagri7[i];
                }
                }
                }
                function equip_style(feature) {
                                    return {
                fillColor: towns_color7(feature.properties.MechEquipment),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                }
                let breaks_agr8 = [0,61.2,74.8,79.9,85.5,100];
                let colorsagri8 =  ['#edf8fb','#b2e2e2','#66c2a4','#2ca25f','#006d2c'];
                function towns_color8(d) {
                for(let i = 0; i < breaks_agr8.length; i++) {
                if(d > breaks_agr8[i] && d <= breaks_agr8[i+1]) {
                return colorsagri8[i];
                }
                }
                }
                function comms_style(feature) {
                                    return {
                fillColor: towns_color8(feature.properties.CommsAsset),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                }
                let breaks_agr9 = [0,39.9,56.6,68.3,77.8,100];
                let colorsagri9 =  ['#edf8fb','#b2e2e2','#66c2a4','#2ca25f','#006d2c'];
                function towns_color9(d) {
                for(let i = 0; i < breaks_agr9.length; i++) {
                if(d > breaks_agr9[i] && d <= breaks_agr9[i+1]) {
                return colorsagri9[i];
                }
                }
                }
                function serv_style(feature) {
                                    return {
                fillColor: towns_color9(feature.properties.ExtenServices),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                }
                let breaks_agr10 = [0,5.9,10.8,15.5,23.7,100];
                let colorsagri10=  ['#edf8fb','#b2e2e2','#66c2a4','#2ca25f','#006d2c'];
                function towns_color10(d) {
                for(let i = 0; i < breaks_agr10.length; i++) {
                if(d > breaks_agr10[i] && d <= breaks_agr10[i+1]) {
                return colorsagri10[i];
                }
                }
                }
                function coop_style(feature) {
                                    return {
                fillColor: towns_color10(feature.properties.Cooperatives),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                }
                let breaks_agr11 = [0,3.8,9.7,15,21.6,100];
                let colorsagri11=  ['#edf8fb','#b2e2e2','#66c2a4','#2ca25f','#006d2c'];
                function towns_color11(d) {
                for(let i = 0; i < breaks_agr11.length; i++) {
                if(d > breaks_agr11[i] && d <= breaks_agr11[i+1]) {
                return colorsagri11[i];
                }
                }
                }
                function farmsch_style(feature) {
                                    return {
                fillColor: towns_color11(feature.properties.FarmSchool),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                }
                var lyrken=new L.GeoJSON.AJAX('data/Agriculture/agri_input_use.geojson',{style:towns_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Agricultural HHs who used improved seeds(%): ' +'</b>' +feature.properties.Agricultur +'<br>'+
        
                '</div>'
                )
                 }});
            var geojsonLabel = {
            radius: 0,
                };
                var label =new L.GeoJSON.AJAX('data/Hotspots2/label.geojson', {
                pointToLayer: function (feature, latlng) {
                    return L.circleMarker(latlng, geojsonLabel).bindTooltip(feature.properties.label, {permanent: true, 
                    direction: "center",
                    className: "my-labels"}).openTooltip();
                    }
                }).addTo(map);
            
               lyrken.addTo(map);
                let legend = L.control({position: "bottomright"});
                 removeLegend()
                 legend.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">% Ag.HH who used Improved Seeds </b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaks.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colors[i-1] + '"></i>' +
                 breaks[i-1] + ' - ' + breaks[i] + '<br>';
                 }
                 return div;
                 };legend.addTo(map);
                     
                function openLryken(){
                 var lyrken=new L.GeoJSON.AJAX('data/Agriculture/agri_input_use.geojson',{style:towns_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Agricultural HHs who used improved seeds(%): ' +'</b>' +feature.properties.Agricultur +'<br>'+
        
                '</div>'
                )
                 }}).addTo(map); 
                // legend.addTo(map);
                }
                 function openAgri1(){
                var agri1=new L.GeoJSON.AJAX('data/Agriculture/agri_input_use.geojson',{style:agri1_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Agricultural HHs who used organic fertilizer(%): ' +'</b>' +feature.properties.Agricult_1 + '<br>'+
                '</div>'
                ).addTo(map);
                 }});
                 }
                 
                function openAgri2(){ 
                  var agri2=new L.GeoJSON.AJAX('data/Agriculture/agri_input_use.geojson',{style:agri2_style,onEachFeature: function(feature, layer) {  

                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Agricultural HHs who used inorganic fertilizer(%): ' +'</b>' +feature.properties.Agricult_2 +'<br>'+
                '</div>'
                ).addTo(map);
                 }}); }
                function openAgri3(){ var agri3=new L.GeoJSON.AJAX('data/Agriculture/agri_input_use.geojson',{style:agri3_style,onEachFeature: function(feature, layer) {  

                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                    '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Agricultural HHs who used pesticides(%) : ' +'</b>' +feature.properties.Agricult_3 +'<br>'+
                '</div>'
                ).addTo(map);
                 }}); }
            
                 function openLandProtect(){ var Landprotect=new L.GeoJSON.AJAX('data/Agriculture/agri_input_use.geojson',{style:LandProtect_style,onEachFeature: function(feature, layer) {  

                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                    '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Land protected soil against erosion : ' +'</b>' +feature.properties.Erosion +'<br>'+
                '</div>'
                ).addTo(map);
                 }}); }
            
                 function openAgroF(){ var agroforestry=new L.GeoJSON.AJAX('data/Agriculture/agri_input_use.geojson',{style:agrof_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                    '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'HH planted agroforestry trees(%): ' +'</b>' +feature.properties.Agroforestry +'<br>'+
                '</div>'
                ).addTo(map);
                 }}); }
            
                 function openIrrigation(){ var irrigation=new L.GeoJSON.AJAX('data/Agriculture/agri_input_use.geojson',{style:Irrig_style,onEachFeature: function(feature, layer) {  

                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                    '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'HH practiced irrigation (%) : ' +'</b>' +feature.properties.Irrigation +'<br>'+
                '</div>'
                ).addTo(map);
                 }});
                }
            
                 function openEquip(){ var mechEquip=new L.GeoJSON.AJAX('data/Agriculture/agri_input_use.geojson',{style:agri3_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                    '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'HH used mechanical equipment(%) : ' +'</b>' +feature.properties.MechEquipment +'<br>'+
                '</div>'
                ).addTo(map);
                 }}); }
            
                function openComms(){  var commsasset=new L.GeoJSON.AJAX('data/Agriculture/agri_input_use.geojson',{style:comms_style,onEachFeature: function(feature, layer) {  
                 layer.bindPopup(
                '<div id="popup">' +'<b style= color: "blue">' +
                    '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'HH use atleast one comm. asset (e.g. radio) : ' +'</b>' +feature.properties.CommsAsset +'<br>'+
                '</div>'
                ).addTo(map);
                 }}); }
            
                 function openServ(){ var extenServ= new L.GeoJSON.AJAX('data/Agriculture/agri_input_use.geojson',{style:serv_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                    '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'HH who recieve extension services(%) : ' +'</b>' +feature.properties.ExtenServices +'<br>'+
                '</div>'
                ).addTo(map);
                 }}); }
            
                 function openCoop(){ var coop =new L.GeoJSON.AJAX('data/Agriculture/agri_input_use.geojson',{style:coop_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                    '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'AgHH in cooperatives/Associations(%) : ' +'</b>' +feature.properties.Cooperatives +'<br>'+
                '</div>'
                ).addTo(map);
                 }}); }
            
                 function openFarmSch(){ var farmsch =new L.GeoJSON.AJAX('data/Agriculture/agri_input_use.geojson',{style:farmsch_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                    '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'AgHH participated in farmer field sch.(%) : ' +'</b>' +feature.properties.FarmSchool +'<br>'+
                '</div>'
                ).addTo(map);
                 }}); }
              
                         /*****  AGRICULTURE GENDER ******/
            
                 let breaksgtl = [13,34,58,83,120,191];
                let colorsgtl = ['#edf8fb','#b2e2e2','#66c2a4','#2ca25f','#006d2c'];
                function towns_colorgtl(d) {
                for(let i = 0; i < breaksgtl.length; i++) {
                if(d > breaksgtl[i] && d <= breaksgtl[i+1]) {
                return colorsgtl[i];
                }
                }
                }
               
                 function total_style(feature) {
                                    return {
                fillColor: towns_colorgtl(feature.properties.TotalLand),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                 }
               
                 function opentland(){var male_head =new L.GeoJSON.AJAX('data/Agriculture/agriculture_gender.geojson',{style:total_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                    '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                    '<b>' + 'Total land area(0000 Ha) : ' +'</b>' +feature.properties.TotalLand +'<br>'+
                '</div>'
                ).addTo(map);
                 }});}
            
                 let breaksgtl1 = [5.66,6.01,34.1,55.44,92.82,147];
                let colorsgtl1 = ['#edf8fb','#b2e2e2','#66c2a4','#2ca25f','#006d2c'];
                function towns_colorgtl1(d) {
                for(let i = 0; i < breaksgtl1.length; i++) {
                if(d > breaksgtl1[i] && d <= breaksgtl1[i+1]) {
                return colorsgtl1[i];
                }
                }
                }
               
                 function agri_style(feature) {
                                    return {
                fillColor: towns_colorgtl(feature.properties.AgriLand),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                 }
               function openAgrland(){var agri =new L.GeoJSON.AJAX('data/Agriculture/agriculture_gender.geojson',{style:agri_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                    '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                 '<b>' + 'Agricultural land(000 Ha): ' +'</b>' +feature.properties.AgriLand +'<br>'+
                '</div>'
                ).addTo(map);
                 }});}
                 let breaksgtl2 = [0,43.2,55.3,65.3,71.5,100];
                 let colorsgtl2 = ['#edf8fb','#b2e2e2','#66c2a4','#2ca25f','#006d2c'];
                function towns_colorgtl2(d) {
                for(let i = 0; i < breaksgtl2.length; i++) {
                if(d > breaksgtl2[i] && d <= breaksgtl2[i+1]) {
                return colorsgtl2[i];
                }
                }
                }
               
                 function land_style(feature) {
                                    return {
                fillColor: towns_colorgtl2(feature.properties.PagriLand),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                 }
               
                 function openPagland(){var agri =new L.GeoJSON.AJAX('data/Agriculture/agriculture_gender.geojson',{style:land_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                    '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Agricultural land(%): ' +'</b>' +feature.properties.PagriLand +'<br>'+
                '</div>'
                ).addTo(map);
                 }});}
            
                 let breaksgtl3 = [0,18,63,82.2,89.5,100];
                 let colorsgtl3 =['#edf8fb','#b2e2e2','#66c2a4','#2ca25f','#006d2c'];
                function towns_colorgtl3(d) {
                for(let i = 0; i < breaksgtl3.length; i++) {
                if(d > breaksgtl3[i] && d <= breaksgtl3[i+1]) {
                return colorsgtl3[i];
                }
                }
                }
               
                 function hh_style(feature) {
                                    return {
                fillColor: towns_colorgtl3(feature.properties.AgriHH),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                 }
                 function openAgrihh(){var agri =new L.GeoJSON.AJAX('data/Agriculture/agriculture_gender.geojson',{style:hh_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                    '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                 '<b>' + 'Agricultural HHs (%): ' +'</b>' +feature.properties.AgriHH + '<br>'+
                '</div>'
                ).addTo(map);
                 }});}
            
                 let breaksg3 = [0,67.3,70.8,73.5,75.6,100];
                let colorsg3 =  ['#edf8fb','#b2e2e2','#66c2a4','#2ca25f','#006d2c'];
                function towns_colorg3(d) {
                for(let i = 0; i < breaksg3.length; i++) {
                if(d > breaksg3[i] && d <= breaksg3[i+1]) {
                return colorsg3[i];
                }
                }
                }
         
                 function male_style(feature) {
                                    return {
                fillColor: towns_colorg3(feature.properties.MaleheadHH),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                 }
               function openMalehead(){var male_head =new L.GeoJSON.AJAX('data/Agriculture/agriculture_gender.geojson',{style:male_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                    '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'HH with male head(%) : ' +'</b>' +feature.properties.MaleheadHH +'<br>'+
                '</div>'
                ).addTo(map);
                 }});}
            
                let breaksg4 = [0,23.7,26,28.2,31.6,100];
                let colorsg4 =  ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colorg4(d) {
                for(let i = 0; i < breaksg4.length; i++) {
                if(d > breaksg4[i] && d <= breaksg4[i+1]) {
                return colorsg4[i];
                }
                }
                }
         
                 function female_style(feature) {
                                    return {
                fillColor: towns_colorg4(feature.properties.FemaleheadHH),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                 }
               function openFemalehead(){var female_head =new L.GeoJSON.AJAX('data/Agriculture/agriculture_gender.geojson',{style:female_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                    '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'HH with female head(%) : ' +'</b>' +feature.properties.FemaleheadHH +'<br>'+
                '</div>'
                ).addTo(map);
                 }});}
                                         
                 let breaksg5 = [0,46.9,54.3,61.2,67,100];
                let colorsg5 =  ['#edf8fb','#b2e2e2','#66c2a4','#2ca25f','#006d2c'];
                function towns_colorg5(d) {
                for(let i = 0; i < breaksg5.length; i++) {
                if(d > breaksg5[i] && d <= breaksg5[i+1]) {
                return colorsg5[i];
                }
                }
                }
               
                 function Mfarm_style(feature) {
                                    return {
                fillColor: towns_colorg5(feature.properties.MaleFarmers),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                 }
                 function openMalefarm(){var male_farm =new L.GeoJSON.AJAX('data/Agriculture/agriculture_gender.geojson',{style:Mfarm_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                    '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Male farmers (%) : ' +'</b>' +feature.properties.MaleFarmers +'<br>'+
                '</div>'
                ).addTo(map);
                 }});}
            
                 let breaksg6 = [0,41.4,43.2,44.5,45.9,100];
                let colorsg6 =  ['#edf8fb','#b2e2e2','#66c2a4','#2ca25f','#006d2c'];
                function towns_colorg6(d) {
                for(let i = 0; i < breaksg6.length; i++) {
                if(d > breaksg6[i] && d <= breaksg6[i+1]) {
                return colorsg6[i];
                }
                }
                }
               
                 function Ffarm_style(feature) {
                                    return {
                fillColor: towns_colorg6(feature.properties.FemaleFarmers),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                 }
                 function openFemfarm(){var fmale_farm =new L.GeoJSON.AJAX('data/Agriculture/agriculture_gender.geojson',{style:Ffarm_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                    '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Male farmers (%) : ' +'</b>' +feature.properties.FemaleFarmers +'<br>'+
                '</div>'
                ).addTo(map);
                 }});}
                 
                let breaksg7 = [0,6,31,57,70,100];
                let colorsg7 =  ['#edf8fb','#b2e2e2','#66c2a4','#2ca25f','#006d2c'];
                function towns_colorg7(d) {
                for(let i = 0; i < breaksg7.length; i++) {
                if(d > breaksg7[i] && d <= breaksg7[i+1]) {
                return colorsg7[i];
                }
                }
                }
               
                 function Ffarm_style(feature) {
                                    return {
                fillColor: towns_colorg7(feature.properties.SmallLandOwner),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                 }
                 function openSmall(){var fmale_farm =new L.GeoJSON.AJAX('data/Agriculture/agriculture_gender.geojson',{style:Ffarm_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                    '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Own land smaller than 0.5ha: ' +'</b>' +feature.properties.SmallLandOwner +'<br>'+
                '</div>'
                ).addTo(map);
                 }});}
            
                 let breaksg8 = [0,12,38,47,54,100];
                let colorsg8 =  ['#edf8fb','#b2e2e2','#66c2a4','#2ca25f','#006d2c'];
                function towns_colorg8(d) {
                for(let i = 0; i < breaksg8.length; i++) {
                if(d > breaksg8[i] && d <= breaksg8[i+1]) {
                return colorsg8[i];
                }
                }
                }
               
                 function poor_style(feature) {
                                    return {
                fillColor: towns_colorg8(feature.properties.PoorQuantiles),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                 }
                function openPoor(){var fmale_farm =new L.GeoJSON.AJAX('data/Agriculture/agriculture_gender.geojson',{style:Ffarm_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                    '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'HH in two poorest wealth quantiles : ' +'</b>' +feature.properties.PoorQuantiles+'%' +'<br>'+
                '</div>'
                ).addTo(map);
                 }});}
                 
            
                
              //       //  ***CLIMATE***
              //   // Curent climate change
            
                let breakscc1 = [0,0.75,1.1,1.23,1.53,1.54];
                let colorscc1 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colorcc1(d) {
                for(let i = 0; i < breakscc1.length; i++) {
                if(d > breakscc1[i] && d <= breakscc1[i+1]) {
                return colorscc1[i];
                }
                }
                }
               
                 function drydays_style(feature) {
                                    return {
                fillColor: towns_colorcc1(feature.properties.Drydays),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                 }
                function openDrydays(){
                  var drydays=new L.GeoJSON.AJAX('data/Climate/CurrentClimate.geojson',{style:drydays_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Dry day MAM : ' +'</b>' +feature.properties.Drydays +'<br>'+
                '</div>'
                ).addTo(map);
                 }});
                }
            
                 let breakscc2 = [0,0.67,0.79,0.84,0.89,90];
                let colorscc2 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colorcc2(d) {
                for(let i = 0; i < breakscc2.length; i++) {
                if(d > breakscc2[i] && d <= breakscc2[i+1]) {
                return colorscc2[i];
                }
                }
                }
               
                 function Avtemp_style(feature) {
                                    return {
                fillColor: towns_colorcc2(feature.properties.Av_Temp),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                 }
                function openAvTemp(){
                  var Av_temp=new L.GeoJSON.AJAX('data/Climate/CurrentClimate.geojson',{style:Avtemp_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                 '<b>' + 'Av_Temp (degrees celcius)s : ' +'</b>' +feature.properties.Av_Temp +'<br>'+
                '</div>'
                ).addTo(map);
                 }});
                }
            
                let breakscc3 = [-20,-19.76,-13.76,-11.62,-11.26,-10.4];
                let colorscc3 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colorcc3(d) {
                for(let i = 0; i < breakscc3.length; i++) {
                if(d > breakscc3[i] && d <= breakscc3[i+1]) {
                return colorscc3[i];
                }
                }
                }
               
                 function Avprec_style(feature) {
                                    return {
                fillColor: towns_colorcc3(feature.properties.Av_Prec),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                 }
                 function openAvPrec(){
                var Av_prec=new L.GeoJSON.AJAX('data/Climate/CurrentClimate.geojson',{style:Avprec_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Av_Precipitation(% change): ' +'</b>' +feature.properties.Av_Prec +'<br>'+
                   
                '</div>'
                ).addTo(map);
                 }});
                }
            
                                                // future climate change
            
                 let breaksfc1 = [0.60,0.67,0.68,0.69,0.7,0.80];
                let colorsfc1 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colorfc1(d) {
                for(let i = 0; i < breaksfc1.length; i++) {
                if(d > breaksfc1[i] && d <= breaksfc1[i+1]) {
                return colorsfc1[i];
                }
                }
                }
               
                 function t2030_style(feature) {
                                    return {
                fillColor: towns_colorfc1(feature.properties.Temp_2030),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                 }
                function openT30(){var Temp_2030=new L.GeoJSON.AJAX('data/Climate/FutureClimate.geojson',{style:t2030_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Temperature 2030: ' +'</b>' +feature.properties.Temp_2030 +'<br>'+
                
                '</div>'
                ).addTo(map);
                 }});
                }
            
                 let breaksfc2 = [1.20,1.21,1.22,1.26,1.28,1.30];
                let colorsfc2 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colorfc2(d) {
                for(let i = 0; i < breaksfc2.length; i++) {
                if(d > breaksfc2[i] && d <= breaksfc2[i+1]) {
                return colorsfc2[i];
                }
                }
                }
               
                 function t2050_style(feature) {
                                    return {
                fillColor: towns_colorfc2(feature.properties.Temp_2050),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                 }
                function openT50(){var Temp_2050=new L.GeoJSON.AJAX('data/Climate/FutureClimate.geojson',{style:t2050_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                 '<b>' + 'Temperature 2050 : ' +'</b>' +feature.properties.Temp_2050 +'<br>'+
                '</div>'
                ).addTo(map);
                 }});
                }
            
                 let breaksfc3 = [1.70,1.74,1.75,1.76,1.85,1.90];
                let colorsfc3 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colorcf3(d) {
                for(let i = 0; i < breaksfc3.length; i++) {
                if(d > breaksfc3[i] && d <= breaksfc3[i+1]) {
                return colorsfc3[i];
                }
                }
                }
               
                 function t2080_style(feature) {
                                    return {
                fillColor: towns_colorfc3(feature.properties.Temp_2080),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                 }
                function openT80(){var Temp_2080=new L.GeoJSON.AJAX('data/Climate/FutureClimate.geojson',{style:t2080_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Temperature 2080: ' +'</b>' +feature.properties.Temp_2080 +'<br>'+
                '</div>'
                ).addTo(map);
                 }});
                }
            
                 let breaksfc4 = [3.50,3.58,3.68,4.35,4.42,4.80];
                let colorsfc4 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colorfc4(d) {
                for(let i = 0; i < breaksfc4.length; i++) {
                if(d > breaksfc4[i] && d <= breaksfc4[i+1]) {
                return colorsfc4[i];
                }
                }
                }
               
                 function p2030_style(feature) {
                                    return {
                fillColor: towns_colorfc4(feature.properties.Prec_2030),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                 }
                 function openP30(){var Prec_2030=new L.GeoJSON.AJAX('data/Climate/FutureClimate.geojson',{style:p2030_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                  '<div id="popup">' +'<b style= color: "blue">' +
                '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Precipitation 2030: ' +'</b>' +feature.properties.Prec_2030 +'<br>'+
                '</div>'
                ).addTo(map);
                 }});
                }
            
                 let breaksfc5 = [2.00,2.06,2.79,2.83,3.12,3.50];
                let colorsfc5 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colorfc5(d) {
                for(let i = 0; i < breaksfc5.length; i++) {
                if(d > breaksfc5[i] && d <= breaksfc5[i+1]) {
                return colorsfc5[i];
                }
                }
                }
               
                 function p2050_style(feature) {
                                    return {
                fillColor: towns_colorfc5(feature.properties.Prec_2050),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                 }
                 
                 function openP50(){var Prec_2050=new L.GeoJSON.AJAX('data/Climate/FutureClimate.geojson',{style:p2050_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                  '<div id="popup">' +'<b style= color: "blue">' +
                '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Precipitation 2050: ' +'</b>' +feature.properties.Prec_2050 +'<br>'+
                  
                '</div>'
                ).addTo(map);
                 }});
                }
            
                 let breaksfc6 = [6.50,6.79,7.26,7.31,9.05,9.50];
                let colorsfc6 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colorfc6(d) {
                for(let i = 0; i < breaksfc6.length; i++) {
                if(d > breaksfc6[i] && d <= breaksfc6[i+1]) {
                return colorsfc6[i];
                }
                }
                }
               
                 function p2050_style(feature) {
                                    return {
                fillColor: towns_colorfc6(feature.properties.Prec_2080),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                 }
                 
                 function openP80(){var Prec_2050=new L.GeoJSON.AJAX('data/Climate/FutureClimate.geojson',{style:p2050_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                  '<div id="popup">' +'<b style= color: "blue">' +
                '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Precipitation 2080: ' +'</b>' +feature.properties.Prec_2080 +'<br>'+
                  
                '</div>'
                ).addTo(map);
                 }});
                }
        

                
                                                            //  ***FOOD & HEALTH***
                        //   // food security
            
              let breaks_food = [0,3,14,21,33,100];
                let colorsfood = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colorf(d) {
                for(let i = 0; i < breaks_food.length; i++) {
                if(d > breaks_food[i] && d <= breaks_food[i+1]) {
                return colorsfood[i];
                }
                }
                }
                function food_style(feature) {
                                    return {
                fillColor: towns_colorf(feature.properties.Moderately),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                 }
                function openFood(){
                 var Food=new L.GeoJSON.AJAX('data/Food&health/food_security1.geojson',{style:food_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Food Insecure : ' +'</b>' +feature.properties.Moderately +'<br>'+
                '</div>'
                ).addTo(map);
                 }});
                }
            
                let breaks_food1 = [0,8,30,57,72,100];
                let colorsfood1 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colorf1(d) {
                for(let i = 0; i < breaks_food1.length; i++) {
                if(d > breaks_food1[i] && d <= breaks_food1[i+1]) {
                return colorsfood1[i];
                }
                }
                }
                function livelihood_style(feature) {
                                    return {
                fillColor: towns_colorf1(feature.properties.Livelihood),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                 }
                
                function openSmalland(){var small_land=new L.GeoJSON.AJAX('data/Food&health/food_security1.geojson',{style:livelihood_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                 '<b>' + 'Livelihood with Agric.% livestock : ' +'</b>' +feature.properties.Livelihood +'<br>'+
                '</div>'
                ).addTo(map);
                 }});
                }
            
                let breaks_food2 = [0,6,31,57,70,100];
                let colorsfood2 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colorf2(d) {
                for(let i = 0; i < breaks_food2.length; i++) {
                if(d > breaks_food2[i] && d <= breaks_food2[i+1]) {
                return colorsfood2[i];
                }
                }
                }
                function small_land_style(feature) {
                                    return {
                fillColor: towns_colorf2(feature.properties.Own_lands),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                 }
                function openLivelihood(){var poor =new L.GeoJSON.AJAX('data/Food&health/food_security1.geojson',{style:small_land_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Owns land smaller than 0.5 ha: ' +'</b>' +feature.properties.Own_lands + '<br>'+
                '</div>'
                ).addTo(map);
                 }});
                }
            
                let breaks_food3 = [0,12,38,47,54,100];
                let colorsfood3 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colorf3(d) {
                for(let i = 0; i < breaks_food3.length; i++) {
                if(d > breaks_food3[i] && d <= breaks_food3[i+1]) {
                return colorsfood3[i];
                }
                }
                }
                function poor_style(feature) {
                                    return {
                fillColor: towns_colorf3(feature.properties.PoorQuantiles),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                 }
                function openPoorquant(){var poor =new L.GeoJSON.AJAX('data/Food&health/food_security1.geojson',{style:poor_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'HH in two poorest wealth quantiles: ' +'</b>' +feature.properties.PoorQuantiles + '<br>'+
                '</div>'
                ).addTo(map);
                 }});
                }
                 let breaks_food4 = [0,16.4,24.2,36.1,45.3,100];
                let colorsfood4 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colorf4(d) {
                for(let i = 0; i < breaks_food4.length; i++) {
                if(d > breaks_food4[i] && d <= breaks_food4[i+1]) {
                return colorsfood4[i];
                }
                }
                }
                function NoStorage_style(feature) {
                                    return {
                fillColor: towns_colorf4(feature.properties.No_storage),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                 }
                
                
                 function openStorage(){var NoStorage=new L.GeoJSON.AJAX('data/Food&health/food_security1.geojson',{style:NoStorage_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'No storage of harvested foods(% hh) : ' +'</b>' +feature.properties.No_storage +'<br>'+
                    
                '</div>'
                ).addTo(map);
                 }});
                }

                                                        //   //  women health
            
                let breaks_health1 = [3.5,3.6,4,4.4,4.7,5.0];
                let colorsh1 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colorh1(d) {
                for(let i = 0; i < breaks_health1.length; i++) {
                if(d > breaks_health1[i] && d <= breaks_health1[i+1]) {
                return colorsh1[i];
                }
                }
                }
                function fertility_style(feature) {
                                    return {
                fillColor: towns_colorh1(feature.properties.FertilityRate),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                 }
                let breaks_health2 = [0,25.3,31.2,36.7,44.5,100];
                let colorsh2 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colorh2(d) {
                for(let i = 0; i < breaks_health2.length; i++) {
                if(d > breaks_health2[i] && d <= breaks_health2[i+1]) {
                return colorsh2[i];
                }
                }
                }
                function BMI_style(feature) {
                                    return {
                fillColor: towns_colorh2(feature.properties.AbnormalBMI),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                 }
                let breaks_health3 = [3.0,3.5,4.4,4.8,5.4,6.0];
                let colorsh3 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colorh3(d) {
                for(let i = 0; i < breaks_health3.length; i++) {
                if(d > breaks_health3[i] && d <= breaks_health3[i+1]) {
                return colorsh3[i];
                }
                }
                }
                function forty_style(feature) {
                                    return {
                fillColor: towns_colorh3(feature.properties.Mothersafterforty),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                 }
                 
                function openFertility(){var fertility =new L.GeoJSON.AJAX('data/Food&health/WomenHealth.geojson',{style:fertility_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Total fertility rate : ' +'</b>' +feature.properties.FertilityRate +'<br>'+
                '</div>'
                ).addTo(map);
                 }});
                }
            
                 function openBMI(){var BMI =new L.GeoJSON.AJAX('data/Food&health/WomenHealth.geojson',{style:BMI_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                 '<b>' + 'Women with abnormal BMI(%) : ' +'</b>' +feature.properties.AbnormalBMI +'<br>'+
                '</div>'
                ).addTo(map);
                 }});
                }
            
                 function openForty(){var Forty =new L.GeoJSON.AJAX('data/Food&health/WomenHealth.geojson',{style:forty_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Mean No. of children ever born to women ages 40-49 ' +'</b>' +feature.properties.Mothersafterforty +'<br>'+
               
                '</div>'
                ).addTo(map);
                 }});
                }
            
                                                        //   // ***HDI***
                                            // hdi mapping
            
               let breakhd1 = [0.500,0.501,0.518,0.518,0.524,0.650];
                let colorshd1 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colorhd1(d) {
                for(let i = 0; i < breakhd1.length; i++) {
                if(d > breakhd1[i] && d <= breakhd1[i+1]) {
                return colorshd1[i];
                }
                }
                }


                // styling layers
                function hd1_style(feature) {
                                    return {
                fillColor: towns_colorhd1(feature.properties.HDIfemale),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                                }

               function openhdifemale(){
              var hdi1 = new L.GeoJSON.AJAX('data/HDI/HDI.geojson',{style:hd1_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip('<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'HDI female: ' +'</b>' +feature.properties.HDIfemale +'<br>'+
                '</div>'
                ).addTo(map);
                 }}); 
                }  
                let breakhd2 = [0.530,0.533,0.541,0.552,0.553,0.700];
                let colorshd2 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colorhd2(d) {
                for(let i = 0; i < breakhd2.length; i++) {
                if(d > breakhd2[i] && d <= breakhd2[i+1]) {
                return colorshd2[i];
                }
                }
                }


                // styling layers
                function hd2_style(feature) {
                                    return {
                fillColor: towns_colorhd2(feature.properties.HDImale),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                                }

               function openhdimale(){
              var hdi2= new L.GeoJSON.AJAX('data/HDI/HDI.geojson',{style:hd2_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip('<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'HDI male: ' +'</b>' +feature.properties.HDImale + '<br>'+
                '</div>'
                ).addTo(map);
                 }}); 
                }  

                let breakhd3 = [0.650,0.694,0.752,0.762,0.768,0.850];
                let colorshd3 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colorhd3(d) {
                for(let i = 0; i < breakhd3.length; i++) {
                if(d > breakhd2[i] && d <= breakhd3[i+1]) {
                return colorshd3[i];
                }
                }
                }


                // styling layers
                function hd3_style(feature) {
                                    return {
                fillColor: towns_colorhd3(feature.properties.HindexFemale),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                                }

               function openhealthf(){
              var hdi3= new L.GeoJSON.AJAX('data/HDI/HDI.geojson',{style:hd3_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip('<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Health index Female: ' +'</b>' +feature.properties.HindexFemale +'<br>'+
                '</div>'
                ).addTo(map);
                 }}); 
                }  

                let breakhd4 = [0.700,0.716,0.762,0.770,0.774,0.850];
                let colorshd4 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colorhd4(d) {
                for(let i = 0; i < breakhd4.length; i++) {
                if(d > breakhd4[i] && d <= breakhd4[i+1]) {
                return colorshd4[i];
                }
                }
                }


                // styling layers
                function hd4_style(feature) {
                                    return {
                fillColor: towns_colorhd4(feature.properties.HindexMale),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                                }

               function openhealthm2(){
              var hdi3= new L.GeoJSON.AJAX('data/HDI/HDI.geojson',{style:hd4_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip('<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Health index Male : ' +'</b>' +feature.properties.HindexMale +'<br>'+
                '</div>'
                ).addTo(map);
                 }}); 
                }  

                let breakhd5 = [0.400,0.413,0.437,0.439,0.442,0.600];
                let colorshd5 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colorhd5(d) {
                for(let i = 0; i < breakhd5.length; i++) {
                if(d > breakhd5[i] && d <= breakhd5[i+1]) {
                return colorshd5[i];
                }
                }
                }


                // styling layers
                function hd5_style(feature) {
                                    return {
                fillColor: towns_colorhd5(feature.properties.EindexFemale),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                                }

               function openhealthm3(){
              var hdi3= new L.GeoJSON.AJAX('data/HDI/HDI.geojson',{style:hd5_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip('<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Education index Male: ' +'</b>' +feature.properties.EindexFemale +'<br>'+
                '</div>'
                ).addTo(map);
                 }}); 
                }  
                let breakhd6 = [0.400,0.445,0.445,0.464,0.464,0.600];
                let colorshd6 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colorhd6(d) {
                for(let i = 0; i < breakhd6.length; i++) {
                if(d > breakhd6[i] && d <= breakhd6[i+1]) {
                return colorshd6[i];
                }
                }
                }


                // styling layers
                function hd6_style(feature) {
                                    return {
                fillColor: towns_colorhd6(feature.properties.EindexMale),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                                }

               function openhealthm4(){
              var hdi3= new L.GeoJSON.AJAX('data/HDI/HDI.geojson',{style:hd6_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip('<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Education index Male: ' +'</b>' +feature.properties.EindexMale +'<br>'+
                '</div>'
                ).addTo(map);
                 }}); 
                } 

                let breakhd7 = [0.400,0.418,0.428,0.429,0.437,0.600];
                let colorshd7 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colorhd7(d) {
                for(let i = 0; i < breakhd7.length; i++) {
                if(d > breakhd7[i] && d <= breakhd7[i+1]) {
                return colorshd7[i];
                }
                }
                }


                // styling layers
                function hd7_style(feature) {
                                    return {
                fillColor: towns_colorhd7(feature.properties.IncindexFemale),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                                }

               function openhealthm5(){
              var hdi3= new L.GeoJSON.AJAX('data/HDI/HDI.geojson',{style:hd7_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip('<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Income Index Female : ' +'</b>' +feature.properties.IncindexFemale +'<br>'+
                '</div>'
                ).addTo(map);
                 }}); 
                } 
            
                let breakhd8 = [0.450,0.457,0.468,0.469,0.477,0.600];
                let colorshd8 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colorhd8(d) {
                for(let i = 0; i < breakhd8.length; i++) {
                if(d > breakhd8[i] && d <= breakhd8[i+1]) {
                return colorshd8[i];
                }
                }
                }


                // styling layers
                function hd8_style(feature) {
                                    return {
                fillColor: towns_colorhd8(feature.properties.IncindexMale),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                                }

               function openhealthm6(){
              var hdi3= new L.GeoJSON.AJAX('data/HDI/HDI.geojson',{style:hd8_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip('<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Income Index Female : ' +'</b>' +feature.properties.IncindexMale +'<br>'+
                '</div>'
                ).addTo(map);
                 }}); 
                }  

                                                                //  ***HOTSPOTS ANALYSIS LAYERS***
                                                        //  adaptive capacity
                let breakshealth = [0.27,0.28,0.36,0.42,0.47,0.6];
                let colorshealth =  ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colorh(d) {
                for(let i = 0; i < breakshealth.length; i++) {
                if(d > breakshealth[i] && d <= breakshealth[i+1]) {
                return colorshealth[i];
                }
                }
                }
                let breaks_incomeindex = [0.41,0.42,0.43,0.44,0.55,0.60];
                let colorsincome =  ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colori(d) {
                for(let i = 0; i < breaks_incomeindex.length; i++) {
                if(d > breaks_incomeindex[i] && d <= breaks_incomeindex[i+1]) {
                return colorsincome[i];
                }
                }
                }
                let breaks_eduindex = [0.39,0.40,0.41,0.44,0.54,0.6];
                let colorsedu =  ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colore(d) {
                for(let i = 0; i < breaks_eduindex.length; i++) {
                if(d > breaks_eduindex[i] && d <= breaks_eduindex[i+1]) {
                return colorsedu[i];
                }
                }
                }
                let breakada4 = [0.3,0.378,0.41,0.452,0.49,0.55];
                let colorshada4 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colorada4(d) {
                for(let i = 0; i < breakada4.length; i++) {
                if(d > breakada4[i] && d <= breakada4[i+1]) {
                return colorshada4[i];
                }
                }
                }
                function health_style(feature) {
                                return {
                fillColor: towns_colorh(feature.properties.HealthIndex),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                 }
                function incomeindex_style(feature) {
                                    return {
                fillColor: towns_colorh (feature.properties.IncomeindexF),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                                }  
                function eduindex_style(feature) {
                                    return {
                fillColor: towns_colore(feature.properties.EducationIndexF),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                                }    
                function ada4_style(feature) {
                                    return {
                fillColor: towns_colorada4(feature.properties.WeightedAverage),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                                } 
                 function openHealthindex(){
                  var Healthindex =new L.GeoJSON.AJAX('data/AdaptiveCapacity.geojson',{style:health_style,onEachFeature: function(feature, layer) { 
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Health Index: ' +'</b>' +feature.properties.HealthIndex +'<br>'+
        
                '</div>'
                ).addTo(map);
                 }});   
                }
            
                 function openIncomeindex(){
                  var Incomeindex =new L.GeoJSON.AJAX('data/AdaptiveCapacity.geojson',{style:incomeindex_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Income Index Females: ' +'</b>' +feature.properties.IncomeindexF + '<br>'+
                '</div>'
                ).addTo(map);
                 }});}
            
                 function openEduindex(){
                  var Eduindex =new L.GeoJSON.AJAX('data/AdaptiveCapacity.geojson',{style:eduindex_style,onEachFeature: function(feature, layer) {
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District +'</b>' +'<br>'+
                '<b>' + 'Education Index Females: ' +'</b>' +feature.properties.EducationIndexF +'<br>'+
                '</div>'
                ).addTo(map);
                 }});   }
            
                 function openAvadapt(){
                  var Averageadapt=new L.GeoJSON.AJAX('data/AdaptiveCapacity.geojson',{style:ada4_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Average : ' +'</b>' +feature.properties.WeightedAverage +'<br>'+
      
                '</div>'
                ).addTo(map);
                 }});     }

                // //  women sensitivity
                let breakswn = [0,43.2,55.3,65.3,71.5,100];
                let colorsswn = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function swn_color(d) {
                for(let i = 0; i < breakswn.length; i++) {
                if(d > breakswn[i] && d <= breakswn[i+1]) {
                return colorsswn[i];
                }
                }
                } 
                function swn_style(feature) {
                                    return {
                fillColor: swn_color(feature.properties.agrLland),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                                }
              function openswn1(){
              var ada4sw= new L.GeoJSON.AJAX('data/Hotspots2/Sensitivity_women.geojson',{style:swn_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip('<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Agricultural land(%): ' +'</b>' +feature.properties.agrLland +'<br>'+
                '</div>'
                ).addTo(map);
                 }}); 
             
                }
             
                let breakswn1 = [0,18,63,82.2,89.5,100];
                let colorsswn1 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function swn1_color(d) {
                for(let i = 0; i < breakswn1.length; i++) {
                if(d > breakswn1[i] && d <= breakswn1[i+1]) {
                return colorsswn1[i];
                }
                }
                } 
                function swn1_style(feature) {
                                    return {
                fillColor: swn1_color(feature.properties.PagriHH),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                                }
              function openswn(){
              var ada4sw= new L.GeoJSON.AJAX('data/Hotspots2/Sensitivity_women.geojson',{style:swn1_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip('<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Agricultural Householda(%): ' +'</b>' +feature.properties.PagriHH + '<br>'+
                '</div>'
                ).addTo(map);
                 }}); 
             
                }

                let breakswn2 = [0,27.1,38,70.8,77.1,100];
                let colorsswn2 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function swn2_color(d) {
                for(let i = 0; i < breakswn2.length; i++) {
                if(d > breakswn2[i] && d <= breakswn2[i+1]) {
                return colorsswn2[i];
                }
                }
                } 
                function swn2_style(feature) {
                                    return {
                fillColor: swn2_color(feature.properties.Ag_Average),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                                }
              function openswn2(){
              var ada4sw= new L.GeoJSON.AJAX('data/Hotspots2/Sensitivity_women.geojson',{style:swn2_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip('<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Agriculture Average: ' +'</b>' +feature.properties.Ag_Average +'<br>'+
                '</div>'
                ).addTo(map);
                 }}); 
             
                }

                let breakswn3 = [20,23.9,26,28.2,31.6,40];
                let colorsswn3 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function swn3_color(d) {
                for(let i = 0; i < breakswn3.length; i++) {
                if(d > breakswn3[i] && d <= breakswn3[i+1]) {
                return colorsswn3[i];
                }
                }
                } 
                function swn3_style(feature) {
                                    return {
                fillColor: swn3_color(feature.properties.femaleheadHH),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                                }
              function openswn3(){
              var ada4sw= new L.GeoJSON.AJAX('data/Hotspots2/Sensitivity_women.geojson',{style:swn3_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip('<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Househols with female head: ' +'</b>' +feature.properties.femaleheadHH +'<br>'+
                '</div>'
                ).addTo(map);
                 }}); 
             
                }

                let breakswn4 = [40,41.4,43.2,44.5,45.9,50];
                let colorsswn4 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function swn4_color(d) {
                for(let i = 0; i < breakswn4.length; i++) {
                if(d > breakswn4[i] && d <= breakswn4[i+1]) {
                return colorsswn4[i];
                }
                }
                } 
                function swn4_style(feature) {
                                    return {
                fillColor: swn4_color(feature.properties.femalefarmers),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                                }
              function openswn4(){
              var ada4sw= new L.GeoJSON.AJAX('data/Hotspots2/Sensitivity_women.geojson',{style:swn4_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip('<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Female farmers(%) : ' +'</b>' +feature.properties.femalefarmers +'<br>'+
               '</div>'
                ).addTo(map);
                 }}); 
             
                }
             
                let breakswn5 = [0.28,0.29,0.36,0.54,0.58,0.65];
                let colorsswn5 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function swn5_color(d) {
                for(let i = 0; i < breakswn5.length; i++) {
                if(d > breakswn5[i] && d <= breakswn5[i+1]) {
                return colorsswn5[i];
                }
                }
                } 
                function swn5_style(feature) {
                                    return {
                fillColor: swn5_color(feature.properties.WeightAverage),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                                }
                function openswn5(){
                var ada4sw= new L.GeoJSON.AJAX('data/Hotspots2/Sensitivity_women.geojson',{style:swn5_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip('<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Weight Average : ' +'</b>' +feature.properties.WeightAverage +'<br>'+
                '</div>'
                ).addTo(map);
                 }}); 
             
                }
                     
                
                // Hotspots style
                let breaksexp = [0.38,0.39,0.41,0.42,0,43,0.45];
                let colorsexp = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function exp_color(d) {
                for(let i = 0; i < breaksexp.length; i++) {
                if(d > breaksexp[i] && d <= breaksexp[i+1]) {
                return colorsexp[i];
                }
                }
                } 
                function exp_style(feature) {
                                    return {
                fillColor: exp_color(feature.properties.Exposure),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                                }
                function openexp(){
                var ada4exp= new L.GeoJSON.AJAX('data/Hotspots2/Hotspots.geojson',{style:exp_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip('<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Exposure: ' +'</b>' +feature.properties.Exposure +'<br>'+
                 '</div>'
                ).addTo(map);
                 }}); 
             
                }

                let breaksexp1 = [0.28,0.29,0.36,0.54,0,0.58,0.65];
                let colorsexp1 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function exp1_color(d) {
                for(let i = 0; i < breaksexp1.length; i++) {
                if(d > breaksexp1[i] && d <= breaksexp1[i+1]) {
                return colorsexp1[i];
                }
                }
                } 
                function exp1_style(feature) {
                                    return {
                fillColor: exp1_color(feature.properties.Sensitivity),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                                }
                function openexp1(){
                var ada4exp= new L.GeoJSON.AJAX('data/Hotspots2/Hotspots.geojson',{style:exp1_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip('<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Sensitivity: ' +'</b>' +feature.properties.Sensitivity +'<br>'+
               '</div>'
                ).addTo(map);
                 }}); 
             
                }
                
                let breaksexp2 = [0.30,0.35,0.38,0.41,0,46,0.55];
                let colorsexp2 =['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function exp2_color(d) {
                for(let i = 0; i < breaksexp2.length; i++) {
                if(d > breaksexp2[i] && d <= breaksexp2[i+1]) {
                return colorsexp2[i];
                }
                }
                } 
                function exp2_style(feature) {
                                    return {
                fillColor: exp2_color(feature.properties.Adp_Cap),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                                }
                function openexp2(){
                var ada4exp= new L.GeoJSON.AJAX('data/Hotspots2/Hotspots.geojson',{style:exp2_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip('<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Adaptative Capacity: ' +'</b>' +feature.properties.Adp_Cap + '<br>'+
               '</div>'
                ).addTo(map);
                 }}); 
             
                }

                let breaksexp3 = [1.000,1.27,1.31,1.38,1.43,1.50];
                let colorsexp3 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function exp3_color(d) {
                for(let i = 0; i < breaksexp3.length; i++) {
                if(d > breaksexp3[i] && d <= breaksexp3[i+1]) {
                return colorsexp3[i];
                }
                }
                } 
                function exp3_style(feature) {
                                    return {
                fillColor: exp3_color(feature.properties.Vulnerability),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                                }
                function openexp3(){
                var ada4exp= new L.GeoJSON.AJAX('data/Hotspots2/Hotspots1.geojson',{style:exp3_style,onEachFeature: function(feature, layer) {  
                 layer.bindPopup('<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Vulnerability: ' +'</b>' +feature.properties.Vulnerability +'<br>'+
                '</div>'
                ).addTo(map);
                 }}); 
             
                }
                let breaksexp4 = [0,0.14,0.35,0.54,0.74,1];
                let colorsexp4 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function exp4_color(d) {
                for(let i = 0; i < breaksexp4.length; i++) {
                if(d > breaksexp4[i] && d <= breaksexp4[i+1]) {
                return colorsexp4[i];
                }
                }
                } 
                function exp4_style(feature) {
                                    return {
                fillColor: exp4_color(feature.properties.Norm_Value),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                                }
                function openexp4(){
                var ada4exp= new L.GeoJSON.AJAX('data/Hotspots2/Hotspots.geojson',{style:exp4_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip('<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Normalized Value: ' +'</b>' +feature.properties.Norm_Value+'<br>'+
                '</div>'
                ).addTo(map);
                 }}); 
             
                }
             
                
                 // //  Current Exposure
            
                let breaksc1 = [0,42.54,45.61,47.19,47.64,100];
                let colorc1 =['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colorc1(d) {
                for(let i = 0; i < breaksc1.length; i++) {
                if(d > breaksc1[i] && d <= breaksc1[i+1]) {
                return colorc1[i];
                }
                }
                }

                 function wet_style(feature) {
                                    return {
                fillColor: towns_colorc1(feature.properties.Decr_Wetdays),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                }
                let breaksc2 = [5.0,5.22,5.92,6.11,6.33,6.5];
                let colorc2 =['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colorc2(d) {
                for(let i = 0; i < breaksc2.length; i++) {
                if(d > breaksc2[i] && d <= breaksc2[i+1]) {
                return colorc2[i];
                }
                }
                }

                 function temp_style(feature) {
                                    return {
                fillColor: towns_colorc2(feature.properties.Incr_AvTemp),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                }
                let breaksc3 = [10,10.4,11.6,13.8,20];
                let colorc3 = ['#ffffb2','#fecc5c','#fd8d3c','#e31a1c'];
                function towns_colorc3(d) {
                for(let i = 0; i < breaksc3.length; i++) {
                if(d > breaksc3[i] && d <= breaksc3[i+1]) {
                return colorc3[i];
                }
                }
                }

                 function prec_style(feature) {
                                    return {
                fillColor: towns_colorc3(feature.properties.Decr_AvPrec),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                }
                let breaksc4 = [0.35,0.387,0.412,0.424,0.428,0.5];
                let colorc4 = ['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function towns_colorc4(d) {
                for(let i = 0; i < breaksc4.length; i++) {
                if(d > breaksc4[i] && d <= breaksc4[i+1]) {
                return colorc4[i];
                }
                }
                }

                 function Wav_style(feature) {
                                    return {
                fillColor: towns_colorc4(feature.properties.WeightedAverage),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                }

                function openWetdays(){ var wetdays =new L.GeoJSON.AJAX('data/Exposure.geojson',{style:wet_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Decrease in Wet Days(%): ' +'</b>' +feature.properties.Decr_Wetdays +'<br>'+
                '</div>'
                ) .addTo(map);
                 }}); }
            
                 function openTemp(){
                  var Inc_temp =new L.GeoJSON.AJAX('data/Exposure.geojson',{style:temp_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
                '<b>' + 'Increase in Average Temperature(%): ' +'</b>' +feature.properties.Incr_AvTemp+ '<br>'+
               '</div>'
                ).addTo(map);
                 }});}
            
                function openPrec(){ var Decr_prec =new L.GeoJSON.AJAX('data/Exposure.geojson',{style:prec_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District +'</b>' +'<br>'+
                '<b>' + 'Decrease in Average Precipitation: ' +'</b>' +feature.properties.Decr_AvPrec +'<br>'+
               '</div>'
                ).addTo(map);
                 }});}
            
                 function openWAv(){var T_exposure =new L.GeoJSON.AJAX('data/Exposure.geojson',{style:Wav_style,onEachFeature: function(feature, layer) {  
                 layer.bindTooltip(
                '<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District.toUpperCase() +'</b>' +'<br>'+
             '<b>' + 'Weighted Average: ' +'</b>' +feature.properties.WeightedAverage+'<br>'+
                
                '</div>'
                ).addTo(map);
                 }});}

                                              // //  Future Exposure
            
                let breaksFE1 =  [-Infinity,3.18,3.18,3.23,3.28,Infinity];
                let colorFE1 =['#ffffb2','#fecc5c','#fd8d3c','#f03b20','#bd0026'];
                function FE_colors1(d) {
                for(let i = 0; i < breaksFE1.length; i++) {
                if(d > breaksFE1[i] && d <= breaksFE1[i+1]) {
                return colorFE1[i];
                }
                }
                }

                 function temp2030_style(feature) {
                                    return {
                fillColor: FE_colors1(feature.properties.Temp_2030),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                }
                function openTemp30(){var Temp2030 =new L.GeoJSON.AJAX('data/FutureExposure.geojson',{style:temp2030_style,onEachFeature: function(feature, layer) {  
                 layer.bindPopup(
                '<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District +'</b>' +'<br>'+
                '<b>' + 'Temperature 2030' +'</b>' +feature.properties.Temp_2030 +'<br>'+
                '</div>'
                ).addTo(map);
                 }});}
                let breaksT1 = [-Infinity,3.18,3.18,3.23,3.28,Infinity];
                let colorT1 = ['#edf8fb','#b3cde3','#8c96c6','#8856a7','#810f7c'];
                function towns_colorT1(d) {
                for(let i = 0; i < breaksT1.length; i++) {
                if(d > breaksT1[i] && d <= breaksT1[i+1]) {
                return colorsT1[i];
                }
                }
                }

                 function Temp2030_style(feature) {
                                    return {
                fillColor: towns_colorT1(feature.properties.Temp_2030),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                }
                let breaksT2 = [-Infinity,5.67,5.72,5.9,6.01,Infinity];
                let colorT2 = ['#edf8fb','#b3cde3','#8c96c6','#8856a7','#810f7c'];
                function towns_colorT2(d) {
                for(let i = 0; i < breaksT2.length; i++) {
                if(d > breaksT2[i] && d <= breaksT2[i+1]) {
                return colorsT2[i];
                }
                }
                }

                 function Temp2050_style(feature) {
                                    return {
                fillColor: towns_colorT2(feature.properties.Temp_2050),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                }
                let breaksT3 = [-Infinity,8.16,8.21,8.25,8.67,Infinity];
                let colorT3 = ['#edf8fb','#b3cde3','#8c96c6','#8856a7','#810f7c'];
                function towns_colorT3(d) {
                for(let i = 0; i < breaksT3.length; i++) {
                if(d > breaksT3[i] && d <= breaksT3[i+1]) {
                return colorsT3[i];
                }
                }
                }
                
                 function Temp2080_style(feature) {
                                    return {
                fillColor: towns_colorT3(feature.properties.Temp_2080),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                }
                let breaksP1 = [-Infinity,3.58,3.68,4.35,4.42,Infinity];
                let colorP1 = ['#edf8fb','#b3cde3','#8c96c6','#8856a7','#810f7c'];
                function towns_colorP1(d) {
                for(let i = 0; i < breaksP1.length; i++) {
                if(d > breaksP1[i] && d <= breaksP1[i+1]) {
                return colorsP1[i];
                }
                }
                }

                 function Prec2030_style(feature) {
                                    return {
                fillColor: towns_colorP1(feature.properties.Prec_2030),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                }
                let breaksP2 = [-Infinity,2.06,2.79,2.83,3.12,Infinity];
                let colorP2 = ['#edf8fb','#b3cde3','#8c96c6','#8856a7','#810f7c'];
                function towns_colorP2(d) {
                for(let i = 0; i < breaksP2.length; i++) {
                if(d > breaksP2[i] && d <= breaksP2[i+1]) {
                return colorsP2[i];
                }
                }
                }

                 function Prec2050_style(feature) {
                                    return {
                fillColor: towns_colorP2(feature.properties.Prec_2050),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                }
                let breaksP3 = [-Infinity,6.79,7.26,7.31,9.05,Infinity];
                let colorP3 = ['#edf8fb','#b3cde3','#8c96c6','#8856a7','#810f7c'];
                function towns_colorP2(d) {
                for(let i = 0; i < breaksP3.length; i++) {
                if(d > breaksP3[i] && d <= breaksP3[i+1]) {
                return colorsP3[i];
                }
                }
                }

                 function Prec2080_style(feature) {
                                    return {
                fillColor: towns_colorP3(feature.properties.Prec_2080),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                }
                let breaksE1 = [-Infinity,6.86,6.96,7.6,7.63,Infinity];
                let colorE1 = ['#edf8fb','#b3cde3','#8c96c6','#8856a7','#810f7c'];
                function towns_colorE1(d) {
                for(let i = 0; i < breaksE1.length; i++) {
                if(d > breaksE1[i] && d <= breaksE1[i+1]) {
                return colorsE1[i];
                }
                }
                }

                 function Texpo2030_style(feature) {
                                    return {
                fillColor: towns_colorE1(feature.properties.Expo_2030),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                }
                let breaksE2 = [-Infinity,8.07,8.46,8.5,9.02,Infinity];
                let colorE2 = ['#edf8fb','#b3cde3','#8c96c6','#8856a7','#810f7c'];
                function towns_colorE2(d) {
                for(let i = 0; i < breaksE2.length; i++) {
                if(d > breaksE2[i] && d <= breaksE2[i+1]) {
                return colorsE2[i];
                }
                }
                }

                 function Texpo2050_style(feature) {
                                    return {
                fillColor: towns_colorE2(feature.properties.Expo_2050),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                }
                let breaksE3 = [-Infinity,14.95,15.51,15.52,17.77,Infinity];
                let colorE3 = ['#edf8fb','#b3cde3','#8c96c6','#8856a7','#810f7c'];
                function towns_colorE3(d) {
                for(let i = 0; i < breaksE3.length; i++) {
                if(d > breaksE3[i] && d <= breaksE3[i+1]) {
                return colorsE3[i];
                }
                }
                }

                 function Texpo2080_style(feature) {
                                    return {
                fillColor: towns_colorE3(feature.properties.Expo_2080),
                weight: 1,
                opacity: 0.5,
                color: "black",
                fillOpacity: 1,
                };
                }
                function openTemp30(){var Temp2030 =new L.GeoJSON.AJAX('data/FutureExposure.geojson',{style:Temp2030_style,onEachFeature: function(feature, layer) {  
                 layer.bindPopup(
                '<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District +'</b>' +'<br>'+
                '<b>' + 'Temperature 2030' +'</b>' +feature.properties.Exposure +'<br>'+
                '<b>' + 'Temperature 2050: ' +'</b>' +feature.properties.Sensitivit+ '<br>'+
                '<b>' + 'Temperature 2080: ' +'</b>' +feature.properties.Adaptive_C +'<br>'+
                '<b>' + 'Precipitation 2030: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Precipitation 2050: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Precipitation 2080: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Total Exposure 2030: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Total Exposure 2050: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Total Exposure 2080: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                
                '</div>'
                ).addTo(map);
                 }});}
                 function openTemp50(){var Temp2050 =new L.GeoJSON.AJAX('data/FutureExposure.geojson',{style:Temp2050_style,onEachFeature: function(feature, layer) {  
                 layer.bindPopup(
                '<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District +'</b>' +'<br>'+
                '<b>' + 'Temperature 2030' +'</b>' +feature.properties.Exposure +'<br>'+
                '<b>' + 'Temperature 2050: ' +'</b>' +feature.properties.Sensitivit+ '<br>'+
                '<b>' + 'Temperature 2080: ' +'</b>' +feature.properties.Adaptive_C +'<br>'+
                '<b>' + 'Precipitation 2030: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Precipitation 2050: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Precipitation 2080: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Total Exposure 2030: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Total Exposure 2050: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Total Exposure 2080: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                
                '</div>'
                ).addTo(map);
                 }});}
                function openTemp80(){ var Temp2080 =new L.GeoJSON.AJAX('data/FutureExposure.geojson',{style:Temp2080_style,onEachFeature: function(feature, layer) {  
                 layer.bindPopup(
                '<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District +'</b>' +'<br>'+
                '<b>' + 'Temperature 2030' +'</b>' +feature.properties.Exposure +'<br>'+
                '<b>' + 'Temperature 2050: ' +'</b>' +feature.properties.Sensitivit+ '<br>'+
                '<b>' + 'Temperature 2080: ' +'</b>' +feature.properties.Adaptive_C +'<br>'+
                '<b>' + 'Precipitation 2030: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Precipitation 2050: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Precipitation 2080: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Total Exposure 2030: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Total Exposure 2050: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Total Exposure 2080: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                
                '</div>'
                ).addTo(map);
                 }});}
                 function openPrec30(){var Prec2030 =new L.GeoJSON.AJAX('data/FutureExposure.geojson',{style:Prec2030_style,onEachFeature: function(feature, layer) {  
                 layer.bindPopup(
                '<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District +'</b>' +'<br>'+
                '<b>' + 'Temperature 2030' +'</b>' +feature.properties.Exposure +'<br>'+
                '<b>' + 'Temperature 2050: ' +'</b>' +feature.properties.Sensitivit+ '<br>'+
                '<b>' + 'Temperature 2080: ' +'</b>' +feature.properties.Adaptive_C +'<br>'+
                '<b>' + 'Precipitation 2030: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Precipitation 2050: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Precipitation 2080: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Total Exposure 2030: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Total Exposure 2050: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Total Exposure 2080: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                
                '</div>'
                ).addTo(map);
                 }});}
                 function openPrec50(){var Prec2050 =new L.GeoJSON.AJAX('data/FutureExposure.geojson',{style:Prec2050_style,onEachFeature: function(feature, layer) {  
                 layer.bindPopup(
                '<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District +'</b>' +'<br>'+
                '<b>' + 'Temperature 2030' +'</b>' +feature.properties.Exposure +'<br>'+
                '<b>' + 'Temperature 2050: ' +'</b>' +feature.properties.Sensitivit+ '<br>'+
                '<b>' + 'Temperature 2080: ' +'</b>' +feature.properties.Adaptive_C +'<br>'+
                '<b>' + 'Precipitation 2030: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Precipitation 2050: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Precipitation 2080: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Total Exposure 2030: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Total Exposure 2050: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Total Exposure 2080: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                
                '</div>'
                ).addTo(map);
                 }});}
                 function openPrec80(){var Prec2080 =new L.GeoJSON.AJAX('data/FutureExposure.geojson',{style:Prec2080_style,onEachFeature: function(feature, layer) {  
                 layer.bindPopup(
                '<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District +'</b>' +'<br>'+
                '<b>' + 'Temperature 2030' +'</b>' +feature.properties.Exposure +'<br>'+
                '<b>' + 'Temperature 2050: ' +'</b>' +feature.properties.Sensitivit+ '<br>'+
                '<b>' + 'Temperature 2080: ' +'</b>' +feature.properties.Adaptive_C +'<br>'+
                '<b>' + 'Precipitation 2030: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Precipitation 2050: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Precipitation 2080: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Total Exposure 2030: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Total Exposure 2050: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Total Exposure 2080: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                
                '</div>'
                ).addTo(map);
                 }});}
                 function openTexpo30(){var T_expo2030 =new L.GeoJSON.AJAX('data/FutureExposure.geojson',{style:Texpo2030_style,onEachFeature: function(feature, layer) {  
                 layer.bindPopup(
                '<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District +'</b>' +'<br>'+
                '<b>' + 'Temperature 2030' +'</b>' +feature.properties.Exposure +'<br>'+
                '<b>' + 'Temperature 2050: ' +'</b>' +feature.properties.Sensitivit+ '<br>'+
                '<b>' + 'Temperature 2080: ' +'</b>' +feature.properties.Adaptive_C +'<br>'+
                '<b>' + 'Precipitation 2030: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Precipitation 2050: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Precipitation 2080: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Total Exposure 2030: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Total Exposure 2050: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Total Exposure 2080: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                
                '</div>'
                ).addTo(map);
                 }});}
                 function openTexpo50(){var T_expo2050 =new L.GeoJSON.AJAX('data/FutureExposure.geojson',{style:Texpo2050_style,onEachFeature: function(feature, layer) {  
                 layer.bindPopup(
                '<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District +'</b>' +'<br>'+
                '<b>' + 'Temperature 2030' +'</b>' +feature.properties.Exposure +'<br>'+
                '<b>' + 'Temperature 2050: ' +'</b>' +feature.properties.Sensitivit+ '<br>'+
                '<b>' + 'Temperature 2080: ' +'</b>' +feature.properties.Adaptive_C +'<br>'+
                '<b>' + 'Precipitation 2030: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Precipitation 2050: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Precipitation 2080: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Total Exposure 2030: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Total Exposure 2050: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Total Exposure 2080: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                
                '</div>'
                ).addTo(map);
                 }});}
                 function openTexpo80(){var T_expo2080 =new L.GeoJSON.AJAX('data/FutureExposure.geojson',{style:Texpo2080_style,onEachFeature: function(feature, layer) {  
                 layer.bindPopup(
                '<div id="popup">' +'<b style= color: "blue">' +
                     '<b id="region">' +feature.properties.District +'</b>' +'<br>'+
                '<b>' + 'Temperature 2030' +'</b>' +feature.properties.Exposure +'<br>'+
                '<b>' + 'Temperature 2050: ' +'</b>' +feature.properties.Sensitivit+ '<br>'+
                '<b>' + 'Temperature 2080: ' +'</b>' +feature.properties.Adaptive_C +'<br>'+
                '<b>' + 'Precipitation 2030: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Precipitation 2050: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Precipitation 2080: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Total Exposure 2030: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Total Exposure 2050: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                '<b>' + 'Total Exposure 2080: ' +'</b>' +feature.properties.Vulnerabil+'<br>'+
                
                '</div>'
                ).addTo(map);
                 }});}
                                      
                            
                          
                //******Add Legend******
                function removeLegend(){
                  if(document.querySelector(".legend") != null)
                { document.querySelector(".legend").remove();}
                }    

                 function LegendA1() {let legendA1 = L.control({position: "bottomright"});
                 removeLegend()
                 legendA1.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">% Ag.HH who used Improved Seeds </b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaks.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colors[i-1] + '"></i>' +
                 breaks[i-1] + ' - ' + breaks[i] + '<br>';
                 }
                 return div;
                 };legendA1.addTo(map);
                }
                 
                 
               
                 function LegendA2() {let legendA2 = L.control({position: "bottomright"});
                 removeLegend()
                legendA2.onAdd = function() {
                let div = L.DomUtil.create("div", "legend");
                div.innerHTML =
                '<b style="color: red;size: 10pt;">% Ag.HH who used Organic Fertlizer</b><br>per District<br>' +
                '<small></small><br>';
                for(let i = breaks_agr1.length-1; i > 0; i--) {
                div.innerHTML +=
                '<i style="background-color: ' + colorsagri[i-1] + '"></i>' +
                breaks_agr1[i-1] + ' - ' + breaks_agr1[i] + '<br>';
                }
                return div;
              };legendA2.addTo(map);}

              function LegendA3() {let legendA3 = L.control({position: "bottomright"});
              removeLegend()
                legendA3.onAdd = function() {
                let div = L.DomUtil.create("div", "legend");
                div.innerHTML =
                '<b style="color: red;size: 10pt;">% Ag.HH who used Inorganic Fertlizer(</b><br>per District<br>' +
                '<small></small><br>';
                for(let i = breaks_agr2.length-1; i > 0; i--) {
                div.innerHTML +=
                '<i style="background-color: ' + colorsagri2[i-1] + '"></i>' +
                breaks_agr2[i-1] + ' - ' + breaks_agr2[i] + '<br>';
                }
                return div;
              };legendA3.addTo(map);}

                function LegendA4() {let legendA4 = L.control({position: "bottomright"});
                removeLegend()
                legendA4.onAdd = function() {
                let div = L.DomUtil.create("div", "legend");
                div.innerHTML =
                '<b style="color: red;size: 10pt;">% Ag.HH who used Pesticides</b><br>per District<br>' +
                '<small></small><br>';
                for(let i = breaks_agr3.length-1; i > 0; i--) {
                div.innerHTML +=
                '<i style="background-color: ' + colorsagri3[i-1] + '"></i>' +
                breaks_agr3[i-1] + ' - ' + breaks_agr3[i] + '<br>';
                }
                return div;
                };legendA4.addTo(map);}

                function LegendA5() {let legendA5 = L.control({position: "bottomright"});
                 removeLegend()
                 legendA5.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">% Land protected against soil erosion </b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaks_agr4.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsagri4[i-1] + '"></i>' +
                 breaks_agr4[i-1] + ' - ' + breaks_agr4[i] + '<br>';
                 }
                 return div;
                 };legendA5.addTo(map);
                }

                function LegendA6() {let legendA6 = L.control({position: "bottomright"});
                 removeLegend()
                 legendA6.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">% HH who planted Agroforestry Trees </b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaks_agr5.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsagri5[i-1] + '"></i>' +
                 breaks_agr5[i-1] + ' - ' + breaks_agr5[i] + '<br>';
                 }
                 return div;
                 };legendA6.addTo(map);
                }

                function LegendA7() {let legendA7 = L.control({position: "bottomright"});
                 removeLegend()
                 legendA7.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">% HH who Practiced Irrigation</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaks_agr6.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsagri6[i-1] + '"></i>' +
                 breaks_agr6[i-1] + ' - ' + breaks_agr6[i] + '<br>';
                 }
                 return div;
                 };legendA7.addTo(map);
                }

                function LegendA8() {let legendA8 = L.control({position: "bottomright"});
                 removeLegend()
                 legendA8.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">% HH who used Mechanical Equipment</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaks_agr7.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsagri7[i-1] + '"></i>' +
                 breaks_agr7[i-1] + ' - ' + breaks_agr7[i] + '<br>';
                 }
                 return div;
                 };legendA8.addTo(map);
                }

                function LegendA9() {let legendA9 = L.control({position: "bottomright"});
                 removeLegend()
                 legendA9.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">% HH who used communication Asset</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaks_agr8.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsagri8[i-1] + '"></i>' +
                 breaks_agr8[i-1] + ' - ' + breaks_agr8[i] + '<br>';
                 }
                 return div;
                 };legendA9.addTo(map);
                }

                function LegendA10() {let legendA10 = L.control({position: "bottomright"});
                 removeLegend()
                 legendA10.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">% HH who received extension services</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaks_agr9.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsagri9[i-1] + '"></i>' +
                 breaks_agr9[i-1] + ' - ' + breaks_agr9[i] + '<br>';
                 }
                 return div;
                 };legendA10.addTo(map);
                }

                function LegendA11() {let legendA11 = L.control({position: "bottomright"});
                 removeLegend()
                 legendA11.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">% Ag.HH in Agricultural Institutions</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaks_agr10.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsagri10[i-1] + '"></i>' +
                 breaks_agr10[i-1] + ' - ' + breaks_agr10[i] + '<br>';
                 }
                 return div;
                 };legendA11.addTo(map);
                }

                function LegendA12() {let legendA12 = L.control({position: "bottomright"});
                 removeLegend()
                 legendA12.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">% HH who Participated in Farmer Field School</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaks_agr11.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsagri11[i-1] + '"></i>' +
                 breaks_agr11[i-1] + ' - ' + breaks_agr11[i] + '<br>';
                 }
                 return div;
                 };legendA12.addTo(map);
                }

                function LegendG1() {let legendG1 = L.control({position: "bottomright"});
                 removeLegend()
                 legendG1.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Total Land Area(0000Ha)</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaksgtl.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsgtl[i-1] + '"></i>' +
                 breaksgtl[i-1] + ' - ' + breaksgtl[i] + '<br>';
                 }
                 return div;
                 };legendG1.addTo(map);
                }
                function LegendG2() {let legendG2 = L.control({position: "bottomright"});
                 removeLegend()
                 legendG2.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Agricultural Land(000Ha)</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaksgtl1.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsgtl1[i-1] + '"></i>' +
                 breaksgtl1[i-1] + ' - ' + breaksgtl1[i] + '<br>';
                 }
                 return div;
                 };legendG2.addTo(map);
                }
                function LegendG3() {let legendG3 = L.control({position: "bottomright"});
                 removeLegend()
                 legendG3.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Agricultural Land (%)</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaksgtl2.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsgtl2[i-1] + '"></i>' +
                 breaksgtl2[i-1] + ' - ' + breaksgtl2[i] + '<br>';
                 }
                 return div;
                 };legendG3.addTo(map);
                }
                function LegendG4() {let legendG4 = L.control({position: "bottomright"});
                 removeLegend()
                 legendG4.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Agricultural Households (%)</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaksgtl3.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsgtl3[i-1] + '"></i>' +
                 breaksgtl3[i-1] + ' - ' + breaksgtl3[i] + '<br>';
                 }
                 return div;
                 };legendG4.addTo(map);
                }
                function LegendG5() {let legendG5 = L.control({position: "bottomright"});
                 removeLegend()
                 legendG5.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Households with Male Heads(%)</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaksg3.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsg3[i-1] + '"></i>' +
                 breaksg3[i-1] + ' - ' + breaksg3[i] + '<br>';
                 }
                 return div;
                 };legendG5.addTo(map);
                }
                function LegendG6() {let legendG6 = L.control({position: "bottomright"});
                 removeLegend()
                 legendG6.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Households with Female Heads(%)</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaksg4.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsg4[i-1] + '"></i>' +
                 breaksg4[i-1] + ' - ' + breaksg4[i] + '<br>';
                 }
                 return div;
                 };legendG6.addTo(map);
                }
                function LegendG7() {let legendG7 = L.control({position: "bottomright"});
                 removeLegend()
                 legendG7.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Male Farmers (%)</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaksg5.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsg5[i-1] + '"></i>' +
                 breaksg5[i-1] + ' - ' + breaksg5[i] + '<br>';
                 }
                 return div;
                 };legendG7.addTo(map);
                }
                function LegendG8() {let legendG8 = L.control({position: "bottomright"});
                 removeLegend()
                 legendG8.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Female Farmers (%)</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaksg6.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsg6[i-1] + '"></i>' +
                 breaksg6[i-1] + ' - ' + breaksg6[i] + '<br>';
                 }
                 return div;
                 };legendG8.addTo(map);
                }
                function LegendG9() {let legendG9 = L.control({position: "bottomright"});
                 removeLegend()
                 legendG9.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">HH Own Less than 0.5 Ha (%)</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaksg7.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsg7[i-1] + '"></i>' +
                 breaksg7[i-1] + ' - ' + breaksg7[i] + '<br>';
                 }
                 return div;
                 };legendG9.addTo(map);
                }
                function LegendG10() {let legendG10 = L.control({position: "bottomright"});
                 removeLegend()
                 legendG10.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Ag.HH in Two Poorest Wealth Quantiles</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaksg8.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsg8[i-1] + '"></i>' +
                 breaksg8[i-1] + ' - ' + breaksg8[i] + '<br>';
                 }
                 return div;
                 };legendG10.addTo(map);
                }

                function LegendC1() {let legendC1 = L.control({position: "bottomright"});
                 removeLegend()
                 legendC1.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Dry Days MAM</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breakscc1.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorscc1[i-1] + '"></i>' +
                 breakscc1[i-1] + ' - ' + breakscc1[i] + '<br>';
                 }
                 return div;
                 };legendC1.addTo(map);
                }
                function LegendC2() {let legendC2 = L.control({position: "bottomright"});
                 removeLegend()
                 legendC2.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Average Temperature(degrees celcius)</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breakscc2.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorscc1[i-1] + '"></i>' +
                 breakscc2[i-1] + ' - ' + breakscc2[i] + '<br>';
                 }
                 return div;
                 };legendC2.addTo(map);
                }
                function LegendC3() {let legendC3 = L.control({position: "bottomright"});
                 removeLegend()
                 legendC3.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Average Precipitation(% Change)</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breakscc3.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorscc3[i-1] + '"></i>' +
                 breakscc3[i-1] + ' - ' + breakscc3[i] + '<br>';
                 }
                 return div;
                 };legendC3.addTo(map);
                }
                function LegendC4() {let legendC4 = L.control({position: "bottomright"});
                 removeLegend()
                 legendC4.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Temperature 2030</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaksfc1.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsfc1[i-1] + '"></i>' +
                 breaksfc1[i-1] + ' - ' + breaksfc1[i] + '<br>';
                 }
                 return div;
                 };legendC4.addTo(map);
                }
                function LegendC5() {let legendC5 = L.control({position: "bottomright"});
                 removeLegend()
                 legendC5.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Temperature 2050</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaksfc2.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsfc2[i-1] + '"></i>' +
                 breaksfc2[i-1] + ' - ' + breaksfc2[i] + '<br>';
                 }
                 return div;
                 };legendC5.addTo(map);
                }
                function LegendC6() {let legendC6 = L.control({position: "bottomright"});
                 removeLegend()
                 legendC6.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Temperature 2080</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaksfc3.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsfc3[i-1] + '"></i>' +
                 breaksfc3[i-1] + ' - ' + breaksfc3[i] + '<br>';
                 }
                 return div;
                 };legendC6.addTo(map);
                }
                function LegendC7() {let legendC7 = L.control({position: "bottomright"});
                 removeLegend()
                 legendC7.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Precipitation 2030</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaksfc4.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsfc4[i-1] + '"></i>' +
                 breaksfc4[i-1] + ' - ' + breaksfc4[i] + '<br>';
                 }
                 return div;
                 };legendC7.addTo(map);
                }
                function LegendC8() {let legendC8 = L.control({position: "bottomright"});
                 removeLegend()
                 legendC8.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Precipitation 2050</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaksfc5.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsfc5[i-1] + '"></i>' +
                 breaksfc5[i-1] + ' - ' + breaksfc5[i] + '<br>';
                 }
                 return div;
                 };legendC8.addTo(map);
                }
                function LegendC9() {let legendC9 = L.control({position: "bottomright"});
                 removeLegend()
                 legendC9.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Precipitation 2080</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaksfc6.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsfc6[i-1] + '"></i>' +
                 breaksfc6[i-1] + ' - ' + breaksfc6[i] + '<br>';
                 }
                 return div;
                 };legendC9.addTo(map);
                }

                function LegendF1() {let legendF1 = L.control({position: "bottomright"});
                 removeLegend()
                 legendF1.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Moderately andServerely Food Insecure</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaks_food.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsfood[i-1] + '"></i>' +
                 breaks_food[i-1] + ' - ' + breaks_food[i] + '<br>';
                 }
                 return div;
                 };legendF1.addTo(map);
                }
                function LegendF2() {let legendF2 = L.control({position: "bottomright"});
                 removeLegend()
                 legendF2.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Livelihood with Agriculture and Livestock</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaks_food1.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsfood1[i-1] + '"></i>' +
                 breaks_food1[i-1] + ' - ' + breaks_food1[i] + '<br>';
                 }
                 return div;
                 };legendF2.addTo(map);
                }
                function LegendF3() {let legendF3 = L.control({position: "bottomright"});
                 removeLegend()
                 legendF3.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">HH that Own Smaller than 0.5Ha</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaks_food2.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsfood2[i-1] + '"></i>' +
                 breaks_food2[i-1] + ' - ' + breaks_food2[i] + '<br>';
                 }
                 return div;
                 };legendF3.addTo(map);
                }
                function LegendF4() {let legendF4 = L.control({position: "bottomright"});
                 removeLegend()
                 legendF4.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">HH in two Poorest Quantiles</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaks_food3.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsfood3[i-1] + '"></i>' +
                 breaks_food3[i-1] + ' - ' + breaks_food3[i] + '<br>';
                 }
                 return div;
                 };legendF4.addTo(map);
                }
                function LegendF5() {let legendF5 = L.control({position: "bottomright"});
                 removeLegend()
                 legendF5.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">No Storage of Harvested Food(%HH)</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaks_food4.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsfood4[i-1] + '"></i>' +
                 breaks_food4[i-1] + ' - ' + breaks_food4[i] + '<br>';
                 }
                 return div;
                 };legendF5.addTo(map);
                }
                function LegendF6() {let legendF6 = L.control({position: "bottomright"});
                 removeLegend()
                 legendF6.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Total Fertility Rate</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaks_health1.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsh1[i-1] + '"></i>' +
                 breaks_health1[i-1] + ' - ' + breaks_health1[i] + '<br>';
                 }
                 return div;
                 };legendF6.addTo(map);
                }
           
                function LegendF7() {let legendF7 = L.control({position: "bottomright"});
                 removeLegend()
                 legendF7.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Women with Abnormal BMI(%)</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaks_health2.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsh2[i-1] + '"></i>' +
                 breaks_health2[i-1] + ' - ' + breaks_health2[i] + '<br>';
                 }
                 return div;
                 };legendF7.addTo(map);
                }
                function LegendF8() {let legendF8 = L.control({position: "bottomright"});
                 removeLegend()
                 legendF8.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;"> Mean #Children born women ages(40-49)</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaks_health2.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsh3[i-1] + '"></i>' +
                 breaks_health3[i-1] + ' - ' + breaks_health3[i] + '<br>';
                 }
                 return div;
                 };legendF8.addTo(map);
                }
                // HDI
                function LegendH1() {let Legendm1 = L.control({position: "bottomright"});
                 removeLegend()
                 Legendm1.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">HDI Females</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breakhd1.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorshd1[i-1] + '"></i>' +
                 breakhd1[i-1] + ' - ' + breakhd1[i] + '<br>';
                 }
                 return div;
                 };Legendm1.addTo(map);
                }
                function LegendH2() {let Legendm2 = L.control({position: "bottomright"});
                 removeLegend()
                 Legendm2.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">HDI Males</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breakhd2.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorshd2[i-1] + '"></i>' +
                 breakhd2[i-1] + ' - ' + breakhd2[i] + '<br>';
                 }
                 return div;
                 };Legendm2.addTo(map);
                }
                function LegendH3() {let Legendm3 = L.control({position: "bottomright"});
                 removeLegend()
                 Legendm3.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Health Index Females</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breakhd3.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorshd3[i-1] + '"></i>' +
                 breakhd3[i-1] + ' - ' + breakhd3[i] + '<br>';
                 }
                 return div;
                 };Legendm3.addTo(map);
                }
                function LegendH4() {let Legendm4 = L.control({position: "bottomright"});
                 removeLegend()
                 Legendm4.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Health Index Males</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breakhd4.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorshd4[i-1] + '"></i>' +
                 breakhd4[i-1] + ' - ' + breakhd4[i] + '<br>';
                 }
                 return div;
                 };Legendm4.addTo(map);
                }
                function LegendH5() {let Legendm5 = L.control({position: "bottomright"});
                 removeLegend()
                 Legendm5.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Educational Index Females</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breakhd5.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorshd5[i-1] + '"></i>' +
                 breakhd5[i-1] + ' - ' + breakhd5[i] + '<br>';
                 }
                 return div;
                 };Legendm5.addTo(map);
                }
                function LegendH6() {let Legendm6 = L.control({position: "bottomright"});
                 removeLegend()
                 Legendm6.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Educational Index Males</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breakhd6.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorshd6[i-1] + '"></i>' +
                 breakhd6[i-1] + ' - ' + breakhd6[i] + '<br>';
                 }
                 return div;
                 };Legendm6.addTo(map);
                }
                function LegendH7() {let Legendm7 = L.control({position: "bottomright"});
                 removeLegend()
                 Legendm7.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Income Index Females</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breakhd7.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorshd7[i-1] + '"></i>' +
                 breakhd7[i-1] + ' - ' + breakhd7[i] + '<br>';
                 }
                 return div;
                 };Legendm7.addTo(map);
                }
                function LegendH8() {let Legendm8 = L.control({position: "bottomright"});
                 removeLegend()
                 Legendm8.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Income Index Males</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breakhd8.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorshd8[i-1] + '"></i>' +
                 breakhd8[i-1] + ' - ' + breakhd8[i] + '<br>';
                 }
                 return div;
                 };Legendm8.addTo(map);
                }

                function Legendada1() {let Legendada1 = L.control({position: "bottomright"});
                 removeLegend()
                 Legendada1.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Health Index</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breakshealth.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorshealth[i-1] + '"></i>' +
                 breakshealth[i-1] + ' - ' + breakshealth[i] + '<br>';
                 }
                 return div;
                 };Legendada1.addTo(map);
                }
                function Legendada2() {let Legendada2 = L.control({position: "bottomright"});
                 removeLegend()
                 Legendada2.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Income Index Females</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaks_incomeindex.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsincome[i-1] + '"></i>' +
                 breaks_incomeindex[i-1] + ' - ' + breaks_incomeindex[i] + '<br>';
                 }
                 return div;
                 };Legendada2.addTo(map);
                }
                function Legendada3() {let Legendada3 = L.control({position: "bottomright"});
                 removeLegend()
                 Legendada3.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Education Index Females</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaks_eduindex.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsedu[i-1] + '"></i>' +
                 breaks_eduindex[i-1] + ' - ' + breaks_eduindex[i] + '<br>';
                 }
                 return div;
                 };Legendada3.addTo(map);
                }
                function Legendada4() {let Legendada4 = L.control({position: "bottomright"});
                 removeLegend()
                 Legendada4.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Adaptive capacity index</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breakada4.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorshada4[i-1] + '"></i>' +
                 breakada4[i-1] + ' - ' + breakada4[i] + '<br>';
                 }
                 return div;
                 };Legendada4.addTo(map);
                }
                function Legendswn() {let Legendswn = L.control({position: "bottomright"});
                 removeLegend()
                 Legendswn.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">% of Agricultural Land</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breakswn.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsswn[i-1] + '"></i>' +
                 breakswn[i-1] + ' - ' + breakswn[i] + '<br>';
                 }
                 return div;
                 };Legendswn.addTo(map);
                }
                function Legendswn1() {let Legendswn1 = L.control({position: "bottomright"});
                 removeLegend()
                 Legendswn1.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">% of Agricultural Household</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breakswn1.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsswn1[i-1] + '"></i>' +
                 breakswn1[i-1] + ' - ' + breakswn1[i] + '<br>';
                 }
                 return div;
                 };Legendswn1.addTo(map);
                }
              
                function Legendswn2() {let Legendswn2 = L.control({position: "bottomright"});
                 removeLegend()
                 Legendswn2.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Agriculture Average</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breakswn2.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsswn2[i-1] + '"></i>' +
                 breakswn2[i-1] + ' - ' + breakswn2[i] + '<br>';
                 }
                 return div;
                 };Legendswn2.addTo(map);
                }
                function Legendswn3() {let Legendswn3 = L.control({position: "bottomright"});
                 removeLegend()
                 Legendswn3.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">% HH with female Head</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breakswn3.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsswn3[i-1] + '"></i>' +
                 breakswn3[i-1] + ' - ' + breakswn3[i] + '<br>';
                 }
                 return div;
                 };Legendswn3.addTo(map);
                }
                function Legendswn4() {let Legendswn4 = L.control({position: "bottomright"});
                 removeLegend()
                 Legendswn4.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">% of Female farmers</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breakswn4.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsswn4[i-1] + '"></i>' +
                 breakswn4[i-1] + ' - ' + breakswn4[i] + '<br>';
                 }
                 return div;
                 };Legendswn4.addTo(map);
                }  
                function Legendswn5() {let Legendswn5 = L.control({position: "bottomright"});
                 removeLegend()
                 Legendswn5.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Sensitivity Index</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breakswn5.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsswn5[i-1] + '"></i>' +
                 breakswn5[i-1] + ' - ' + breakswn5[i] + '<br>';
                 }
                 return div;
                 };Legendswn5.addTo(map);
                }
                function LegendHts1() {let LegendHts1   = L.control({position: "bottomright"});
                 removeLegend()
                 LegendHts1.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;"> Exposure </b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaksexp.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsexp[i-1] + '"></i>' +
                 breaksexp[i-1] + ' - ' + breaksexp[i] + '<br>';
                 }
                 return div;
                 };LegendHts1.addTo(map);
                }
                function LegendHts2() {let LegendHts2 = L.control({position: "bottomright"});
                 removeLegend()
                 LegendHts2.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;"> Sensitivity </b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaksexp1.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsexp1[i-1] + '"></i>' +
                 breaksexp1[i-1] + ' - ' + breaksexp1[i] + '<br>';
                 }
                 return div;
                 };LegendHts2.addTo(map);
                }
                function LegendHts3() {let LegendHts3 = L.control({position: "bottomright"});
                 removeLegend()
                 LegendHts3.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;"> Adaptive Capacity </b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaksexp2.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsexp2[i-1] + '"></i>' +
                 breaksexp2[i-1] + ' - ' + breaksexp2[i] + '<br>';
                 }
                 return div;
                 };LegendHts3.addTo(map);
                }
                function LegendHts4() {let LegendHts4 = L.control({position: "bottomright"});
                 removeLegend()
                 LegendHts4.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Vulnerability Index </b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaksexp3.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorsexp3[i-1] + '"></i>' +
                 breaksexp3[i-1] + ' - ' + breaksexp3[i] + '<br>';
                 }
                 return div;
                 };LegendHts4.addTo(map);
                }

                function LegendExp1() {let LegendExp1 = L.control({position: "bottomright"});
                 removeLegend()
                 LegendExp1.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">% Decrease in Wet Days </b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaksc1.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorc1[i-1] + '"></i>' +
                 breaksc1[i-1] + ' - ' + breaksc1[i] + '<br>';
                 }
                 return div;
                 };LegendExp1.addTo(map);
                }
                function LegendExp2() {let LegendExp2 = L.control({position: "bottomright"});
                 removeLegend()
                 LegendExp2.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Increase in Average Temperature(%) </b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaksc2.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorc2[i-1] + '"></i>' +
                 breaksc2[i-1] + ' - ' + breaksc2[i] + '<br>';
                 }
                 return div;
                 };LegendExp2.addTo(map);
                }
                function LegendExp3() {let LegendExp3 = L.control({position: "bottomright"});
                 removeLegend()
                 LegendExp3.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Decrease in Average Precipitation(%)</b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaksc3.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorc3[i-1] + '"></i>' +
                 breaksc3[i-1] + ' - ' + breaksc3[i] + '<br>';
                 }
                 return div;
                 };LegendExp3.addTo(map);
                }
                function LegendExp4() {let LegendExp4 = L.control({position: "bottomright"});
                 removeLegend()
                 LegendExp4.onAdd = function() {
                 let div = L.DomUtil.create("div", "legend");
                 div.innerHTML =
                 '<b style="color: red;size: 10pt;">Exposure Index </b><br>per District<br>' +
                 '<small></small><br>';
                 for(let i = breaksc4.length-1; i > 0; i--) {
                 div.innerHTML +=
                 '<i style="background-color: ' + colorc4[i-1] + '"></i>' +
                 breaksc4[i-1] + ' - ' + breaksc4[i] + '<br>';
                 }
                 return div;
                 };LegendExp4.addTo(map);
                }            
       
          