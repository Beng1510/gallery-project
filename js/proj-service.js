'use strict'

var gProjects = [
    {
     id: "pop-balloon",
     name: "Pop Balloon",
     title: "Better pop them fast",
     desc: "try to catch them all before they fly away",
     url: "projs/pop-balloon",
     publishedAt: 1448693940000,
     labels: ["Matrixes", "keyboard events"],
    },
    {
     id: "minesweeper",
     name: "Minesweeper",
     title: "Watch out for the mines",
     desc: "try to flag them all before you blow up",
     url: "projs/minesweeper",
     publishedAt: 1448693940000,
     labels: ["Matrixes", "keyboard events"],
    },
    {
     id: "book-shop",
     name: "Book Shop",
     title: "Come read something good",
     desc: "Lets see what books are in",
     url: "projs/book-shop",
     publishedAt: 1448693940000,
     labels: ["Matrixes", "keyboard events"],
    },
    {
     id: "chess",
     name: "Chess",
     title: "Check-Mate?",
     desc: "try to win the best",
     url: "projs/chess",
     publishedAt: 1448693940000,
     labels: ["Matrixes", "keyboard events"],
    },
    {
     id: "ball-game",
     name: "Catch the Ball",
     title: "Run fast and catch them all",
     desc: "try to catch them all before they fly away",
     url: "projs/ball-game",
     publishedAt: 1448693940000,
     labels: ["Matrixes", "keyboard events"],
    },
    {
     id: "touch-nums",
     name: "Touch the Numbers",
     title: "Keep order",
     desc: "try to catch them all before they fly away",
     url: "projs/touch-nums",
     publishedAt: 1448693940000,
     labels: ["Matrixes", "keyboard events"],
    },
    ]
    
    function getProjById(projId) {
        var project = gProjects.find(function (project) {
            return projId === project.id
        })
        return project
    }

   
    