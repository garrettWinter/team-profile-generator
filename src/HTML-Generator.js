function generateHTML () {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team Org Char</title>
        <link rel="stylesheet" href="./styles.css">
    </head>
    
    <body>
        <header>My Team Org Chart</header>
        <main>
            <div id="orgBox">
                <div class="empCard">
                    <div class="name-role">
                        Garrett Winter <br> ☕ Manager
                        <!-- ☕ 🎓 👓 -->
                    </div>
                    <div class="empCardBody">
                        <div class="empCardContent">
                            <div class = "empDetails">ID: 1</div>
                            <div class = "empDetails">Email: <br> <a href="mailto:Garrett_Winter@hotmail.com">Garrett_Winter@hotmail.com</a></div>
                            <div class = "empDetails">Office Number: 1</div>
                        </div>
                    </div>
                </div>
    
                <div class="empCard">
                    <div class="name-role">
                        Garrett Winter <br> 👓 Engineer
                        <!-- ☕ 🎓 👓 -->
                    </div>
                    <div class="empCardBody">
                        <div class="empCardContent">
                            <div class = "empDetails">ID: 2</div>
                            <div class = "empDetails">Email: <br> <a href="mailto:Garrett_Winter@hotmail.com">Garrett_Winter@hotmail.com</a></div>
                            <div class = "empDetails">GitHub: <a href="https://github.com/garrettWinter">garrettWinter</a></div>
                        </div>
                    </div>
                </div>
    
    
                <div class="empCard">
                    <div class="name-role">
                        Garrett Winter <br> 👓 Engineer
                        <!-- ☕ 🎓 👓 -->
                    </div>
                    <div class="empCardBody">
                        <div class="empCardContent">
                            <div class = "empDetails">ID: 3</div>
                            <div class = "empDetails">Email: <br> <a href="mailto:Garrett_Winter@hotmail.com">Garrett_Winter@hotmail.com</a></div>
                            <div class = "empDetails">GitHub: <a href="https://github.com/garrettWinter" target="_blank">garrettWinter</a></div>
                        </div>
                    </div>
                </div>
    
    
                <div class="empCard">
                    <div class="name-role">
                        Garrett Winter <br> 🎓 Intern
                        <!-- ☕ 🎓 👓 -->
                    </div>
                    <div class="empCardBody">
                        <div class="empCardContent">
                            <div class = "empDetails">ID: 4</div>
                            <div class = "empDetails">Email: <br> <a href="mailto:Garrett_Winter@hotmail.com" target="_blank">Garrett_Winter@hotmail.com</a></div>
                            <div class = "empDetails">School: U of M</div>
                        </div>
                    </div>
                </div>
    
                <div class="empCard">
                    <div class="name-role">
                        Garrett Winter <br> 🎓 Intern
                        <!-- ☕ 🎓 👓 -->
                    </div>
                    <div class="empCardBody">
                        <div class="empCardContent">
                            <div class = "empDetails">ID: 5</div>
                            <div class = "empDetails">Email: <br> <a href="mailto:Garrett_Winter@hotmail.com" target="_blank">Garrett_Winter@hotmail.com</a></div>
                            <div class = "empDetails">School: U of M</div>
                        </div>
                    </div>
                </div>
    
            </div>
        </main>
        <footer>Garrett Winter © Copyright 2023, with no rights reserved</footer>
    </body>
    
    </html>`
};

module.exports = generateHTML;
