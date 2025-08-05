
// Token de Mapbox
    mapboxgl.accessToken = 'pk.eyJ1IjoiZmFjdW5kb2FndWVsIiwiYSI6ImNtYndqOXV3NTExNTcya3B1OHBxd2FjcjUifQ.syGb5zzs6GkNHSBJEZ3shw';

    // Datos de los puntos de interés
    const puntosInteres = [
    {
        nombre: "Puerto Argentino",
        lugar: "Stanley",
        fecha: "1982-04-02",
        coordenadas: [-57.8517, -51.6907],
        descripcion: "Capital de las Islas Malvinas. Aquí ocurrió la Operación Rosario, que fue fue la recuperación de las Islas Malvinas por parte de la República Argentina el 2 de abril de 1982.",
        tipo: "ciudad",
        imagen: "./public/puerto-argentino.jpg",
        altImagen: "Infantes de marina argentinos después de la toma."
    },
    {
        nombre: "Operación Georgias",
        lugar: "Islas Georgias del Sur",
        fecha: "1982-04-03",
        coordenadas: [-36.55,-54.433333],
        descripcion: "La Operación Georgias, también conocida como la batalla de Grytviken fue un enfrentamiento por el cual las fuerzas argentinas tomaron los asentamientos y bases británicas en las Islas Georgias del Sur.",
        tipo: "historico",
        imagen: "./public/operacion-georgias.jpeg",
        altImagen: "Buque polar HMS Endurance en Mar del Plata en febrero de 1982, poco antes de su intervención en las Georgias."
    },
    {
        nombre:"Sitio de Puerto Argentino",
        lugar:"Isla Soledad",
        fecha: "1982-05-01 - 1982-06-11",
        coordenadas: [-58.787222,-51.806111],
        descripcion: "Período de la Guerra de las Malvinas previo a la batalla final. El 1 de mayo por la mañana se produjo el ataque de un bombardero Vulcan B.2 del 101 Squadron de la RAF, que atacó la pista del aeropuerto de Stanley con una ristra de 21 bombas de 1000 lb. Por entonces, el COATLANSUR creía equivocadamente que se avecinaba un desembarco británico a gran escala, hecho que nunca se materializó. Luego del primer bombardeo, la aviación inglesa llevó a cabo sendos ataques aéreos contra las bases aéreas de Stanley y Goose Green.",
        tipo: "historico",
        imagen:"./public/sitio-puerto-argentino.jpg",
        altImagen: "Los bombarderos británicos Vulcan atacaban desde el aeródromo de la isla Ascensión. Imagen de un Vulcan B.2 del 101 Squadron de la RAF."
    },
    {
        nombre: "Batalla de Monte Longdon",
        lugar: "Monte Longdon",
        fecha: "1982-06-11 - 1982-06-12",
        coordenadas: [-57.8833, -51.6167],
        descripcion: "Ubicación de una de las batallas más importantes del conflicto, por combates cuerpo a cuerpo con bayoneta —poco usual en la guerra moderna— y por su punto estratégico, debido a que se trataba de una posición clave en torno a la guarnición argentina asentada en Puerto Argentino.",
        tipo: "historico",
        imagen: "./public/monte-longdon.jpg",
        altImagen: "Soldados argentinos en Monte Longdon."
    },
    {
        nombre: "Batalla de San Carlos",
        lugar: "Bahía San Carlos",
        fecha: "1982-05-21 - 1982-05-27",
        coordenadas: [-59.0833, -51.5667],
        descripcion: "Fue el primer enfrentamiento terrestre de la Guerra de las Malvinas. Comenzó con el desembarco británico el 21 de mayo de 1982 —Operación Sutton—. Con la excepción de una breve resistencia de una sección de infantería, la resistencia argentina provino de la aviación con base en el continente. La flota británica sufrió graves pérdidas (Cómo el Hundimiento de la Fragata tipo 21 HMS Ardent con 22 muertos y 30 heridos o el Hundimiento del Destructor tipo 42 HMS Coventry Coventry D-118 con 19 muertos) pero estableció la cabeza de playa.",
        tipo: "historico",
        imagen: "./public/bahia-san-carlos.jpg",
        altImagen: "Desembarco británico en Bahía San Carlos."
    },
    {
        nombre: "Hundimiento ARA General Belgrano",
        lugar: "Paso Drake",
        fecha: "1982-05-02",
        coordenadas: [-61.533,-55.4],
        descripcion: "El hundimiento del ARA General Belgrano fue una acción bélica naval que se produjo fuera del área de exclusión de guerra pactada durante la guerra de las Malvinas, a consecuencia del ataque del submarino nuclear británico HMS Conqueror. El hundimiento del crucero argentino permitió a los británicos la superioridad naval en la zona. El ataque causó la muerte de 323 argentinos —prácticamente la mitad de las bajas de ese país en todo el conflicto—. El hecho generó una polémica en ambos países, al haberse producido fuera del área de exclusión establecida por el Gobierno británico alrededor de las islas. Es el único caso de un barco hundido en guerra por un submarino nuclear.",
        tipo: "historico",
        imagen: "./public/ara-gral-belgrano.jpg",
        altImagen: "Hundimiento del ARA General Belgrano."
    },
    {
        nombre: "Ataque a la isla Borbón",
        lugar: "Aeródromo de Puerto Calderón",
        fecha: "1982-05-14 - 1982-05-15",
        coordenadas: [-59.610278,-51.308889],
        descripcion: "El ataque a la Isla Borbón fue una ofensiva británica a las posiciones argentinas en la Isla Borbón. Inmediatamente después de que las fuerzas argentinas se apoderaron de las islas Malvinas, la Armada Argentina estableció una pequeña base aérea en el Aeródromo Auxiliar Calderón. Durante la noche del 14 de mayo dos helicópteros del 846 Naval Air Squadron, parte de Commando Helicopter Force, salieron con cuarenta y cinco miembros del Escuadrón D a bordo. Encargaron a la tropa de montaña la destrucción de los aviones argentinos, mientras que el personal restante actuaba como fuerza de protección, asegurando la aproximación a la pista de aterrizaje, y formando una reserva operacional.",
        tipo: "historico",
        imagen: "./public/puerto-borbon.jpg",
        altImagen: "Avión de las fuerzas Argentinas detruido."
    },
    {
        nombre: "Operación Keyhole",
        lugar: "Islas Sandwich del Sur",
        fecha: "1982-06-20",
        coordenadas: [-27.3,-59.45],
        descripcion: "La Invasión Británica en las Islas Sandwich del Sur fue la última acción bélica en el marco de la Guerra de Malvinas. Antes del mediodía del 20 de junio, se inició el ataque sobre la roca Twitcher, al mismo tiempo que se emitió un mensaje a la base argentina intimando a la rendición. También en la ladera sur del monte Larsen, se estacionó un helicóptero con un grupo spotter para iniciar el fuego artillero. A las 12:20 el Teniente Peralta Martínez rindió su guarnición. Tras la invasión británica de ese territorio pacíficamente ocupado, 10 argentinos fueron interrogados y hechos prisioneros (un civil y 9 militares) y fueron evacuados por el buque petrolero Olmeda, acompañado por el Yarmouth hacia Puerto Leith en las islas Georgias del Sur.",
        tipo: "historico",
        imagen: "./public/op-keyhole.jpg",
        altImagen: "Estación Cientifica Corbeta Uruguay en la Isla Morrell, Islas Sandwich del Sur."
    },
    {
      nombre: "Batalla de Pradera del Ganso",
      lugar: "Istmo de Darwin, Isla Soledad",
      fecha: "1982-05-27 - 1982-05-29",
      coordenadas: [-58.96,-51.82],
      descripcion: "La Batalla de Pradera del Ganso fue el primer gran enfrentamiento terrestre de la Guerra de las Malvinas. La batalla se libró en el istmo de Darwin, que une Lafonia con la porción norte de la Isla Soledad. La batalla comenzó el 27 de mayo de 1982, cuando las fuerzas británicas lanzaron un ataque sorpresa contra las posiciones argentinas en Pradera del Ganso. Las fuerzas británicas lograron avanzar y capturar la posición, imponiéndose sobre una fuerza argentina de 600 hombres.",
      tipo: "historico",
      imagen: "./public/darwin_soldados.jpg",
      altImagen: "Soldados argentinos en Darwin."
    },
    {
      nombre: "La artillería argentina que le plantó batalla a la poderosa Fuerza Aérea británica",
      lugar: "Puerto Argentino",
      fecha: "1982-05-01",
      coordenadas: [-57.86, -51.68],
      descripcion: "En Malvinas, desde fines de abril de 1982 operaba un Sistema Conjunto de Defensa Aérea integrado por armas y radares, que dirigió la mayoría de los ataques de la Fuerza Aérea Sur con base en el continente. Esto proporcionó ayudas de aeronavegación, de búsqueda y rescate. Fue significativo el aporte del mayor de la Fuerza Aérea Hugo Maiorano, y del capitán de corbeta Héctor Silva. El grupo también lo integró el teniente coronel Héctor L. Arias, quien además condujo los modernos sistemas de armas- misiles y cañones- de la Artillería Antiaérea del Ejército. Excepto una sección de cañones que operó en Darwin-Pradera del Ganso a órdenes del subteniente Claudio Braghini.",
      tipo: "historico",
      imagen: "./public/soldados_auto.avif",
      altImagen: "Soldados argentinos en las islas, junto a un vehiculo de guerra."
    }
    ];

    // Inicializar el mapa
    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-57.8517, -54.6907],
    zoom: 4
    });


    const focusableSelectors = 'button, [href],p, input, select, textarea, [tabindex]:not([tabindex="-1"])';
    let focusableElements = [];
    let firstFocusable, lastFocusable;

    // Agregar controles de navegación
    map.addControl(new mapboxgl.NavigationControl());

    // Elementos del modal
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalFecha = document.getElementById('modalFecha');
    const modalDescription = document.getElementById('modalDescription');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.getElementById('close-modal');

    // Función para crear marcadores personalizados
    function createCustomMarker() {
    const el = document.createElement('div');
    el.className = 'custom-marker'; 
    el.style.position = 'relative'; 
    return el;
    }

    // Función para abrir el modal
    function abrirModal(nombre, lugar, fecha, descripcion, imagen, altImagen, modoOscuro) {
      if(modoOscuro)
        modalTitle.innerHTML = `<p><b>${nombre}</b> - <span class="text-white-600">${lugar}</span></p>`;
      else
        modalTitle.innerHTML = `<p><b>${nombre}</b> - <span class="text-gray-600">${lugar}</span></p>`;
      modalFecha.textContent = fecha ? `Fecha: ${fecha}` : 'Fecha no disponible';
      modalDescription.textContent = descripcion;
      modalImage.src = imagen;
      modalImage.alt = altImagen;
      modal.style.display = 'flex';
      
      modal.setAttribute('aria-hidden', 'false');
      focusableElements = modal.querySelectorAll(focusableSelectors);
      firstFocusable = focusableElements[0];
      lastFocusable = focusableElements[focusableElements.length - 1];

      firstFocusable.focus();
      document.addEventListener('keydown', trapTabKey);
      document.addEventListener('keydown', handleEsc);

      document.body.style.overflow = 'hidden';
      
    }

    // Función para cerrar el modal
    function cerrarModal() {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
      modal.setAttribute('aria-hidden', 'true');
      document.removeEventListener('keydown', trapTabKey);
      document.removeEventListener('keydown', handleEsc);
    }

    function trapTabKey(e) {
        if (e.key === 'Tab') {
        if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
            }
        } else {
            if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
            }
        }
        }
    }

    function handleEsc(e) {
        if (e.key === 'Escape') {
        cerrarModal();
        }
    }

    // Agregar puntos al mapa
    function agregarPuntos() {
      puntosInteres.forEach((punto) => {
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <div class="modal-open">
            <h3 class="font-bold text-lg mb-2">${punto.nombre}</h3>
            <button 
              class="btn-mas-info bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Ver más información
            </button>
            </div>
          `);

        const modo = localStorage.getItem('modo-tema');

        const marker = new mapboxgl.Marker({
          color: modo == 'dark-mode'? '#1e1e1e':'#FF0000',
          scale: 0.8
        })
        .setLngLat(punto.coordenadas)
        .setPopup(popup)
        .addTo(map);

        // Hacer foco y abrir popup con teclado
        const markerElement = marker.getElement();
        markerElement.setAttribute('tabindex', '0');
        markerElement.setAttribute('role', 'button');
        markerElement.setAttribute('aria-label', `Abrir información de ${punto.nombre}`);

        markerElement.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            marker.togglePopup();
          }
        });

        // Cuando popup abre, agregar listeners para cerrar con ESC y abrir modal desde botón
        marker.getPopup().on('open', () => {
          const popupEl = marker.getPopup().getElement();
          const btn = popupEl.querySelector('.btn-mas-info');

          setTimeout(() => {
            const popupEl = marker.getPopup().getElement();
            const btn = popupEl.querySelector('.btn-mas-info');
            if (btn) {
              btn.focus();

              // Abrir modal con Enter o click
              btn.onclick = () => abrirModal(
                punto.nombre,
                punto.lugar,
                punto.fecha,
                punto.descripcion,
                punto.imagen,
                punto.altImagen,
                localStorage.getItem('modo-tema') === 'dark' ? true : false
              );
              btn.onkeydown = (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  abrirModal(
                    punto.nombre,
                    punto.lugar,
                    punto.fecha,
                    punto.descripcion,
                    punto.imagen,
                    punto.altImagen,
                    localStorage.getItem('modo-tema') === 'dark' ? true : false
                  );
                }
              };
            }
          }, 0);

          function onKeyDown(event) {
            if (event.key === 'Escape') {
              marker.getPopup().remove();
              document.removeEventListener('keydown', onKeyDown);
            }
          }
          document.addEventListener('keydown', onKeyDown);
        });
      });
    }

    // Cerrar modal al hacer clic fuera
    document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            cerrarModal();
        }
        });
    }
    });

    // Agregar puntos cuando el mapa esté listo
    map.on('load', () => {
    console.log('Mapa cargado, iniciando carga de puntos...');
    console.log('Estado del mapa:', map.loaded());
    agregarPuntos();
    });

    // Manejar la búsqueda
    const searchForm = document.querySelector('form');
    const searchInput = document.getElementById('search');
    const mapContainer = document.getElementById('map');

    // Función para anunciar cambios a lectores de pantalla
    function announceToScreenReader(message) {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.setAttribute('class', 'sr-only');
      announcement.textContent = message;
      document.body.appendChild(announcement);
        setTimeout(() => announcement.remove(), 1000);
      }

      searchForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const query = searchInput.value.trim();
      
      if (!query || query.length == 0) {
          announceToScreenReader('Por favor, ingresa un lugar para buscar');
          return;
      }

      // Busca en los nombres de los puntos de interés
      const resultadoLocal = puntosInteres.find(p => 
          p.nombre.toLowerCase().includes(query.toLowerCase()) || p.lugar.toLowerCase().includes(query.toLowerCase())
      );

      if (resultadoLocal) {
          const [lng, lat] = resultadoLocal.coordenadas;
          map.flyTo({
          center: [lng, lat],
          zoom: 14,
          essential: true
          });

          announceToScreenReader(`Ubicación encontrada en el mapa: ${resultadoLocal.nombre}`);
      } else {
          announceToScreenReader('No se encontraron resultados para la búsqueda');
      }
    });

    // Manejar el foco del teclado
    mapContainer.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          mapContainer.focus();
      }
    });

    // Funciones para el modal de accesibilidad
    function abrirModalAccesibilidad() {
      const modal = document.getElementById('modalAccesibilidad');
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }

    function cerrarModalAccesibilidad() {
      const modal = document.getElementById('modalAccesibilidad');
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }

    // Funciones para el modal de configuración
    function abrirModalConfiguracion() {
      const modal = document.getElementById('modalConfiguracion');
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }

    function cerrarModalConfiguracion() {
      const modal = document.getElementById('modalConfiguracion');
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }

    // Funciones de accesibilidad
    function toggleAltoContraste(checkbox) {
      document.body.classList.toggle('alto-contraste', checkbox.checked);
    }

    function toggleLectorPantalla(checkbox) {
      // Implementar lógica del lector de pantalla
      console.log('Modo lector de pantalla:', checkbox.checked);
    }

    function cambiarTamañoTexto(tamaño) {
      document.body.style.fontSize = tamaño + 'px';
    }

    // Funciones de configuración
    function cambiarEstiloMapa(estilo) {
      map.setStyle(estilo);
    }

    function cambiarIdioma(idioma) {
      // Implementar cambio de idioma
      console.log('Cambiando idioma a:', idioma);
    }

    // Cerrar modales al hacer clic fuera
    window.onclick = function(event) {
      const modals = document.getElementsByClassName('modal');
      console.log(modals);
      for (let modal of modals) {
        if (event.target === modal) {
          modal.style.display = 'none';
          document.body.style.overflow = 'auto';
        }
      }
    }