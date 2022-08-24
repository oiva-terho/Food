export default function calculator() {
    const result = document.querySelector('.calculating__result span');
    let calcData = {
        gender: 1, 
        ratio: 1.375
    };

    calcCal();
    getStaticInfo('#gender', 'gender', calcData.gender, 1,'calculating__choose-item_active');
    getStaticInfo('#ratio', 'ratio', calcData.ratio, 1.375, 'calculating__choose-item_active');
    getDynamicInfo('#height', 250);
    getDynamicInfo('#weight', 300);
    getDynamicInfo('#age', 125);

    function calcCal() {
        if (!calcData.gender || !calcData.height || !calcData.weight || !calcData.age || !calcData.ratio){
            result.textContent = '____';
            console.log(calcData);
            return;
        } else if (calcData.gender == 0) {
            result.textContent = Math.round((447.593 + (9.247 * calcData.weight) + (3.098 * calcData.height) - (4.330 * calcData.age)) * calcData.ratio);
        } else {
            result.textContent = Math.round((88.362 + (13.397 * calcData.weight) + (4.799 * calcData.height) - (5.677 * calcData.age)) * calcData.ratio);
        }
    }

    function getStaticInfo(parent, attr, attrValue, defaultValue, active) {
        saveCalcData(attr, attrValue, defaultValue);
        document.querySelector(parent).addEventListener('click', (e) => {
            if (e.target.getAttribute(`data-${attr}`)) {
                switch(attr) {
                    case 'gender':
                        calcData.gender = +e.target.getAttribute(`data-${attr}`);
                        break;
                    case 'ratio':
                        calcData.ratio = +e.target.getAttribute(`data-${attr}`);
                        break;
                }
                clearActive();
                e.target.classList.add(active);
                localStorage.setItem(attr, attrValue);
            } else {
                return;
            }
            calcCal();

            function clearActive () { 
                document.querySelectorAll(`${parent} div`).forEach(e => {
                e.classList.remove(active);
                }); 
            }
        });

        function saveCalcData (attr, attrValue, defaultValue) {
            if (localStorage.getItem(attr)) {
                attrValue = localStorage.getItem(attr);
                console.log(attr, attrValue);
                addActive(attrValue);
            } else {
                localStorage.setItem(attr, defaultValue);
                console.log(attr, defaultValue);
                addActive(defaultValue);
            }
            function addActive (value) {
                document.querySelector(`[data-${attr}="${value}"]`)
                    .classList.add('calculating__choose-item_active');
            }
        }
    
    }

    function getDynamicInfo(selector, max) {
        const input = document.querySelector(selector);
        input.addEventListener('input', () => {
            if (input.value.match(/\D/g) || input.value > max) {
                input.style.border = '1px solid red';
            } else {
                input.style.border = 'none';
                switch(selector) {
                    case "#height":
                        calcData.height = +input.value;
                        break;
                    case "#weight":
                        calcData.weight = +input.value;
                        break;
                    case "#age":
                        calcData.age = +input.value;
                        break;
                }
                calcCal();
            }
        });
    }
}