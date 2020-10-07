function MoveButon () {
    setTimeout(function wait () {

        var toolbar = document.querySelector(".toolbar.toolbar-droptarget.toolbar-mainbar.toolbar-noflex.toolbar-large");
        /* var toolbar = document.querySelector(" .toolbar.toolbar-droptarget.toolbar-statusbar.toolbar-medium"); */
        var panel = [".button-toolbar.toggle-trash"];

        panel.forEach(function (element, index, panel) {

            if (document.querySelector(panel[index]) != undefined) {

                if (panel[index] != null) {
                    toolbar.appendChild(document.querySelector(panel[index]));
                    document.querySelector(panel[index] + ' > button').removeAttribute('draggable');
                }
                else {
                    setTimeout(wait, 300);
                }
            }
        });
    }, 300);
}

function DelButon () {
    setTimeout(function wait () {
        var toolbar = document.querySelector(".toolbar.toolbar-droptarget.toolbar-mainbar.toolbar-noflex.toolbar-large");
        /* var toolbar = document.querySelector(" .toolbar.toolbar-droptarget.toolbar-statusbar.toolbar-medium"); */

        var panel = [".button-toolbar.toggle-trash"];


        panel.forEach(function (element, index, panel) {
            toolbar.removeChild(document.querySelector(panel[index]));
        });
    }, 300);
}

MoveButon();

vivaldi.windowPrivate.onFullscreen.addListener(function (x, status) {
    if (status === false) {
        DelButon();
        MoveButon();
    }
});