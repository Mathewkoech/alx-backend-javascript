function calculateNumber (type, a, b) {
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);

    //operations based on type

    switch (type) {
        case 'SUM':
            return roundedA + roundedB;

        case 'SUBTRACT':
            return roundedA - roundedB;

        case 'DIVIDE':
            if (roundedB === 0) {
                return 'Error';
            }
            return roundedA / roundedB;
        

    }
    
}