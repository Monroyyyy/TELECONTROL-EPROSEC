const datosZonas = {
    "Benito Juarez": [
        { se: "BJ-01", estado: "Crítico", circuitos: 3, usuarios: 6200 },
        { se: "BJ-03", estado: "Crítico", circuitos: 2, usuarios: 4800 }
    ],
    "Chapingo": [
        { se: "CH-02", estado: "Parcial", circuitos: 3, usuarios: 5600 }
    ]
};

let chart;

function mostrarZona(zona) {
    const tbody = document.getElementById("tablaZona");
    tbody.innerHTML = "";

    const labels = [];
    const data = [];

    datosZonas[zona].forEach(item => {
        tbody.innerHTML += `
            <tr>
                <td>${item.se}</td>
                <td>${item.estado}</td>
                <td>${item.circuitos}</td>
                <td>${item.usuarios}</td>
            </tr>
        `;
        labels.push(item.se);
        data.push(item.usuarios);
    });

    if (chart) chart.destroy();

    const ctx = document.getElementById("graficaCircuitos");
    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Usuarios afectados',
                data: data
            }]
        }
    });
}

function descargar() {
    alert("Maqueta: aquí TI conectaría la generación del oficio PDF.");
}
