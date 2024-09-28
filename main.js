document.addEventListener('DOMContentLoaded', () => {
    const colorBox = document.getElementById('colorBox');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');

    let colorInterval;

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    startButton.addEventListener('click', () => {
        colorInterval = setInterval(() => {
            colorBox.style.backgroundColor = getRandomColor();
        }, 500); // Менять цвет каждые 0.5 секунды
    });

    stopButton.addEventListener('click', () => {
        clearInterval(colorInterval); // Остановить изменение цвета
    });
});
