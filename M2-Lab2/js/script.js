window.addEventListener('load', () => {
    const formContainer = document.getElementById('empForm');

    const createFormElement = (type, id, required, maxLength, options) => {
        const element = document.createElement('input');
        element.type = type;
        element.id = id;
        element.required = required;
        if (maxLength) {
            element.maxLength = maxLength;
        }
        if (options) {
            options.forEach((option) => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                element.appendChild(optionElement);
            });
        }
        return element;
    };

    const createForm = () => {
        const formElements = [
            { type: 'text', id: 'id', required: true, maxLength: 8 },
            { type: 'text', id: 'name', required: true },
            { type: 'text', id: 'ext', required: true, maxLength: 4 },
            { type: 'email', id: 'email', required: true },
            { type: 'select', id: 'department', required: true, options: ['Administrative', 'Engineering', 'Executive', 'Marketing', 'Quality Assurance', 'Sales'] },
            { type: 'submit', id: 'submit' }
        ];

        formElements.forEach((elementInfo) => {
            const formElement = createFormElement(elementInfo.type, elementInfo.id, elementInfo.required, elementInfo.maxLength, elementInfo.options);
            
            if (elementInfo.type === 'submit') {
                formElement.value = 'Add Employee';
                formElement.addEventListener('click', processForm);
            } else {
                const label = document.createElement('label');
                label.for = elementInfo.id;
                label.textContent = elementInfo.id.charAt(0).toUpperCase() + elementInfo.id.slice(1);
                formContainer.appendChild(label);
            }

            formContainer.appendChild(formElement);
        });
    };

    const processForm = (event) => {
        event.preventDefault();

        const formElements = formContainer.elements;
        const formData = {};

        for (let i = 0; i < formElements.length - 1; i++) {
            formData[formElements[i].id] = formElements[i].value;
        }

        console.log(formData);
    };

    createForm();
});
