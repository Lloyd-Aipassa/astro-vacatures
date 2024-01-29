class AppHeader extends HTMLElement {
	constructor() {
		super();

		// Voeg shadow root toe
		const shadowRoot = this.attachShadow({ mode: "open" });

		// HTML template voor de Shadow DOM
		const template = document.createElement("template");

		template.innerHTML = `
        <style>
        header {
            position: relative;
            background-color: #333;
            color: #fff;
            padding: 10px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        #burger {
            display: none;
        }

        nav {
            display: flex;
            justify-content: center;
            /* background-color: #444; */
            padding: 10px;
        }

        nav a {
            color: #fff;
            text-decoration: none;
            padding: 10px 20px;
            margin: 0 10px;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }

        nav a:hover {
            background-color: #555;
        }

        p#test {
            color: red;
        }

        @media (max-width: 720px) {

            header {
                position: relative;
                background-color: #333;
                color: #fff;
                padding: 10px;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            #burger {
                display: block;
                background-color: #fff;
                border-radius: 2px;
                padding: 3px;  
                z-index: 5;
            }

            nav {
                position: absolute;
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 100vh;
                top: 0;
                left: 0;
                background-color: #333;
                width: 0%;
                opacity: 0;
                transition: all 1s;
            }

            .open{
                width: 95%;
                opacity: 1;
                transition: all 1s;
            }
        }
    </style>

    <header>
        <h1> <slot name='naam' /></h1>
        <img id="burger" src="/images/burger-menu.svg" width="25" height="25" alt="">
        <nav id="navigatie">
            <a href="${this.getAttribute("link1")}">Home</a>
            <a href="${this.getAttribute("link2")}">About</a>
            <a href="${this.getAttribute("link3")}">Services</a>
            <a href="${this.getAttribute("link4")}">Contact</a>
        </nav>
    </header>
        `;

		// Append de tamplate aan de shadow DOM
		const shadowRootContent = template.content.cloneNode(true);
		shadowRoot.appendChild(shadowRootContent);

		const menu = shadowRoot.getElementById("navigatie");
		this.shadowRoot
			.querySelector("#burger")
			.addEventListener("click", () => {
				menu.classList.toggle("open");
			});
		// this.shadowRoot.querySelector("#burger").addEventListener('click', () => {menu.style.opacity = "1"});
	}
}

// Define the custom element tag
customElements.define("app-header", AppHeader);
