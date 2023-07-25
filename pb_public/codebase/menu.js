const menu = new dhx.Menu("menu", {
    css: "dhx_widget--bg_white dhx_widget--bordered"
});

menu.data.parse(Menudataset);

	const Menudataset = [
            {
                value: "Menu",
                items: [
                    {
                        value: "Option 1",
                        icon: "fas fa-file",
                    },
                    {
                        value: "Option 2",
                        icon: "fas fa-file",
                    },
                    {
                        value: "Option 3",
                        icon: "fas fa-file",
                    },
                    {
                        value: "Option 4",
                        icon: "fas fa-file",
                    }
                ]
            },
            {
                
            },
            {
                value: "Edit",
                items: [
                    {
                        value: "Undo",
                        icon: "fas fa-undo",
                    },
                    {
                        value: "Redo",
                        icon: "fas fa-redo",
                    },
                    {
                        value: "Cut",
                        icon: "fas fa-cut",
                    },
                    {
                        value: "Copy",
                        icon: "fas fa-file",
                    }
                ]
            }
        ];