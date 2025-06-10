if (app.activeDocument.layers.length > 0) {
    var cssStyles = "";

    for (var i = 0; i < app.activeDocument.layers.length; i++) {
        var layer = app.activeDocument.layers[i];

        if (layer.visible) {
            var layerName = layer.name.replace(/\s+/g, '-'); // Nettoyage du nom pour un ID valide

            var bounds = layer.bounds; // Renvoie [left, top, right, bottom]
            var left = bounds[0].value; // Left
            var top = bounds[1].value; // Top
            var width = bounds[2].value - left; // Width
            var height = bounds[3].value - top; // Height

            cssStyles += "#"+ layerName + " {\n" +
            "    left: " + left + "px;\n" +
            "    top: " + top + "px;\n" +
            "    width: " + width + "px;\n" +
            "    height: " + height + "px;\n" +
            "}\n";
        }
    }

    var result = prompt("Style CSS à copier et modifier si nécessaire :", cssStyles);

} else {
    alert("Aucun calque trouvé !");
}