


        const layout = new dhx.Layout("layout", {
            type: "line",
            rows: [
                {
                    id: "toolbar",
                    //header: "Header",
                    //collapsable: true,
                    height: "55px",
                    //resizable: true
                },
                {
                    cols: [
                        {
                            id: "sidebar",
                            header: "",
                            collapsable: true,
                            width: "200px",
                            //resizable: true,
                            expand: true,

                        },
                        {
                            id: "content",
                            header: "",
                            html: "<h2>This is where the Content goes</h2>"
                            //resizable: true
                        },
                        //{
                        //    id: "rightbar",
                        //    header: "Aside",
                        //    collapsable: true,
                        //    width: "200px"
                        //},
                    ]
                },
                {
                    id: "footer",
                    //header: "Footer",
                    //collapsable: true,
                    height: "55px"
                }
            ]
        });

        

        const logoSVG = document.getElementById("sample_logo").innerHTML;

		const structure = [
                {
                    "id": "menu",
                    "type": "button",
                    "view": "link",
                    "circle": true,
                    "color": "secondary",
                    "icon": "mdi mdi-menu",
                    "tooltip": "Menu",
                        items: [
                            {
                                "id": "info",
                                value: "Information",
                                type: "button",

                            },
                            {
                                "id": "opt1",
                                value: "Option 1",
                                type: "button",
                            },
                            {
                                "id": "opt2",
                                value: "Option 2",
                                type: "button",
                            },
                            {
                                "id": "opt3",
                                value: "Option 3",
                                type: "button",
                            }
                        ]
                },
                {
                    type: "spacer"
                },
                {
                    type: "customHTML",
                    html: logoSVG,
                    css: "logo-container"
                },
                {
                    type: "spacer"
                },
                {
                    id: "avatar",
                    type: "imageButton",
                    src: "https://snippet.dhtmlx.com/codebase/data/toolbar/01/img/avatar-01.png",
                    tooltip: "profile",
                    count: 10,
                    items: [
                        {
                            id: "setting",
                            value: "settings",                   
                            icon: "mdi mdi-cog",
                            tooltip: "Setting",
                            "type": "button",
                            "view": "link",
                            "color": "secondary",
                            "circle": true,
                        },
                        {
                            type: "button",
                            value: "private messages",
                            count: 10
                        },
                        {
                            value: "log out"
                        }
                    ]
                },
            ]


                        // Toolbar initialization
            const toolbar = new dhx.Toolbar(null, {
                css: "dhx_widget--border_bottom"

            });
            // loading structure into Toolbar
            toolbar.data.parse(structure);

            // attaching Toolbar into a Layout cell
            layout.getCell("toolbar").attach(toolbar);


            const footerstructure = [
            {
                type: "spacer"
            },
            {
                id: "dashboard",
                value: "",
                icon: "mdi mdi-view-dashboard",
                group: "page",
                //twoState: true,
                //active: true
            },
            {
                type: "spacer"
            },
            {
                id: "statistics",
                value: "",
                icon: "mdi mdi-chart-line",
                group: "page",
                //twoState: true,
                //active: false
            },
            {
                type: "spacer"
            },
            {
                id: "requests",
                value: "",
                icon: "mdi mdi-email-mark-as-unread",
                group: "page",
                //twoState: true,
                //active: false
            },
            {
                type: "spacer"
            },
            {
                id: "media",
                value: "",
                icon: "mdi mdi-folder-multiple-image",
                group: "page",
                //twoState: true,
                //active: false
            },
            {
                type: "spacer"
            },

        ]

		const footer = new dhx.Toolbar(null, {
			css: "dhx_widget--border_bottom"

		});
		footer.data.parse(footerstructure);
        layout.getCell("footer").attach(footer);


        const sidebarstructure = [
        { 
          id: "dashboard", 
          value: "Dashboard", 
          icon: "mdi mdi-view-dashboard" 
        },
        {
          id: "statistics",
          value: "Statistics",
          icon: "mdi mdi-chart-line"
        },
        {
          id: "reports",
          value: "Reports",
          icon: "mdi mdi-file-chart"
        },
        { 
          type: "separator" 
        },
        { 
          id: "posts", 
          value: "Posts", 
          icon: "mdi mdi-square-edit-outline",
          items: [
            {
              id: "addPost",
              value: "New Post",
              icon: "mdi mdi-plus"
            },
            {
              id: "allPost",
              value: "Posts",
              icon: "mdi mdi-view-list"
            },
            {
              id: "categoryPost",
              value: "Category",
              icon: "mdi mdi-tag" 
            }
          ]
        },
        { 
          id: "pages", 
          value: "Pages",
          icon: "mdi mdi-file-outline",
          items: [
            {
              id: "addPage",
              value: "New Page",
              icon: "mdi mdi-plus"
            },
            {
              id: "allPage",
              value: "Pages",
              icon: "mdi mdi-view-list"
            },
            {
              id: "categoryPages",
              value: "Category",
              icon: "mdi mdi-tag" 
            }
          ]
        },
        { 
          id: "messages", 
          value: "Messages", 
          count: 18, 
          icon: "mdi mdi-email-mark-as-unread"
        },
        { 
          id: "media", 
          value: "Media",
          icon: "mdi mdi-folder-multiple-image"
        },
        { 
          id: "links", 
          value: "Links",
          icon: "mdi mdi-link"
        },
        { 
          id: "comments", 
          value: "Comments",
          icon: "mdi mdi-comment-multiple-outline",
          count: "118",
          countColor: "primary",
          items: [
            { 
              id: "myComments", 
              value: "My Comments",
              count: 15,
              icon: "mdi mdi-account",
            },
            { 
              id: "allComments", 
              value: "All Comments",
              count: 103,
              countColor: "primary",
              icon: "mdi mdi-comment-multiple-outline",
            },
          ] 
        },
        { 
          type: "spacer"
        },
        { 
          id: "notification", 
          value: "Notification", 
          count: 25, 
          icon: "mdi mdi-bell", 
          countColor: "primary" 
        },
        { 
          id: "configuration",
          value: "Configuration", 
          icon: "mdi mdi-settings",
          items: [
            { 
              id: "myAccount", 
              value: "My Account",
              icon: "mdi mdi-account-settings"
            },
            { 
              id: "general", 
              value: "General Configuration",
              icon: "mdi mdi-tune"
            }
          ]
        }
      ];

        const sidebar = new dhx.Sidebar(null, {
			css: "dhx_widget--border_right"

		});

		sidebar.data.parse(sidebarstructure);
        layout.getCell("sidebar").attach(sidebar);