import { headerMenu } from "./modules/menu.js";


try {
    const header = document.querySelector('.header');
    if (header) {
        headerMenu(header)
    }
} catch (error) {
    console.log(error);
}