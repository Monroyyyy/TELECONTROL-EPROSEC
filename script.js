const datosZonas = {
    "Aeropuerto": [
        { se: "MZA", estado: "Crítico", circuitos: 4, usuarios: 8200 },
        { se: "MER", estado: "Parcial", circuitos: 2, usuarios: 4100 }
    ],
    "Benito Juarez": [
        { se: "COY", estado: "Crítico", circuitos: 3, usuarios: 6200 },
        { se: "NAR", estado: "Crítico", circuitos: 2, usuarios: 4800 },
        { se: "TYA", estado: "Crítico", circuitos: 1, usuarios: 4800 },
        { se: "VER", estado: "Crítico", circuitos: 2, usuarios: 4800 }
    ],
    "Chapingo": [
        { se: "CH-02", estado: "Parcial", circuitos: 3, usuarios: 5600 }
    ],
    "Nezahualcoyotl": [
        { se: "NEZA-01", estado: "Crítico", circuitos: 5, usuarios: 12000 },
        { se: "NEZA-04", estado: "Parcial", circuitos: 2, usuarios: 3600 }
    ],
    "Polanco": [
        { se: "POL-01", estado: "Normal", circuitos: 0, usuarios: 0 }
    ],
    "Tacuba": [
        { se: "TAC-02", estado: "Parcial", circuitos: 2, usuarios: 6230 }
    ],
    "Zócalo": [
        { se: "ZOC-01", estado: "Crítico", circuitos: 4, usuarios: 9800 }
    ]
};

let chart;

function mostrarZona(zona) {
    const tbody = document.getElementById("tablaZona");
    tbody.innerHTML = "";

    if (!datosZonas[zona]) {
        tbody.innerHTML = `<tr><td colspan="4">Sin información disponible</td></tr>`;
        return;
    }

    const labels = [];
    const data = [];

    datosZonas[zona].forEach(item => {
        tbody.innerHTML += `
            <tr>
                <td>${item.se}</td>
                <td>${item.estado}</td>
                <td>${item.circuitos}</td>
                <td>${item.usuarios.toLocaleString()}</td>
            </tr>
        `;
        labels.push(item.se);
        data.push(item.usuarios);
    });

    if (chart) {
        chart.destroy();
    }

    const ctx = document.getElementById("graficaCircuitos").getContext("2d");
    chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                label: "Usuarios afectados",
                data: data
            }]
        },
        options: {
            responsive: true
        }
    });
}

function descargar() {
    alert("Maqueta demostrativa: aquí TI integrará la generación del oficio en PDF.");
}

