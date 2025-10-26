mapboxgl.accessToken = 'pk.eyJ1Ijoic2FuZGFuaS12IiwiYSI6ImNtZ242aGJiYzBmOGkybnE1a3d6bXBybm8ifQ.rYf5WTUBIqMNvgqKk-AFuw';

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/sandani-v/cmh1ukqxt002101rfg45n0p0p',
      center: [144.9631, -37.8136],
      zoom: 11,
      pitch: 45,
      bearing: -17.6,
      antialias: true
…
        new mapboxgl.Popup()
          .setLngLat(e.lngLat)
          .setHTML(`<strong>${parkName}</strong><br>Suburb: ${suburb}<br>Area: ${areaHa} ha`)
          .addTo(map);
      });

      map.on('mouseenter', greenLayer, () => map.getCanvas().style.cursor = 'pointer');
      map.on('mouseleave', greenLayer, () => map.getCanvas().style.cursor = '');
    });
