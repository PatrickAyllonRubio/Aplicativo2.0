import React, {
  useEffect,
  useRef,
  useState
} from 'react';
import {
  Pose,
  POSE_CONNECTIONS
} from '@mediapipe/pose';
import { 
  drawConnectors,
  drawLandmarks
} from '@mediapipe/drawing_utils'

import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import {
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import {
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import {
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';

// Componentes 
import Prenda1 from './componentes/prenda1';
import Prenda2 from './componentes/prenda2';
import Prenda3 from './componentes/prenda3';
import Prenda4 from './componentes/prenda4';
import Header from './componentes/header';
import Menu from './componentes/menu';
import './styles.css';

// avatares
import avatarImage1 from './imagenes/avatar.png';
import avatarImage2 from './imagenes/avatar2.png';
import avatarImage3 from './imagenes/avatar3.png';
import avatarImage4 from './imagenes/avatar4.png';
import avatarImage5 from './imagenes/avatar5.png';

// POLOS para el carrusel
import pmangalarga1 from './imagenes/pchcmangas1.png';
import pmangalarga2 from './imagenes/pcaidadistinta2.png';
import pmangalarga3 from './imagenes/pmangalarga3.png';
import pmangalarga4 from './imagenes/pcuellolargo4.png';
import pmangalarga5 from './imagenes/pcaidadistinta5.png';
import pmangalarga6 from './imagenes/pmangalarga6.png';
import pmangalarga7 from './imagenes/pmangalarga7.png';
import pabierto2 from './imagenes/pabierto2.png';
import poncho1 from './imagenes/poncho1.png';
import poncho2 from './imagenes/poncho2.png';
import pcorto1 from './imagenes/pcorto1.png';
import chaleco1 from './imagenes/chaleco1.png';
import polo1 from './imagenes/polo1.png';
import vestido1 from './imagenes/vestido1.png'

// POLOS para dibujar en el avatar
import pmangalarga1A from './imagenes/pchcmangas1A.png';
import pmangalarga2A from './imagenes/pcaidadistinta2A.png';
import pmangalarga3A from './imagenes/pmangalarga3A.png';
import pmangalarga4A from './imagenes/pcuellolargo4A.png';
import pmangalarga5A from './imagenes/pcaidadistinta5A.png';
import pmangalarga6A from './imagenes/pmangalarga6A.png';
import pmangalarga7A from './imagenes/pmangalarga7A.png';
import pabierto1A from './imagenes/pabierto1A.png';
import pabierto2A from './imagenes/pabierto2A.png';
import poncho1A from './imagenes/poncho1A.png';
import poncho2A from './imagenes/poncho2A.png';
import pcorto1A from './imagenes/pcorto1A.png';
import chaleco1A from './imagenes/chaleco1A.png';
import polo1A from './imagenes/polo1A.png';
import vestido1A from './imagenes/vestido1A.png';

// Pantalones para el carrusel
import pantolgado1 from './imagenes/pantolgado1.png';
import jean1 from './imagenes/jean1.png';
import shortolgado1 from './imagenes/shortolgado1.png';

// Pantalones para dibujar en el avatar
import pantolgado1A from './imagenes/pantolgado1A.png';
import jean1A from './imagenes/jean1A.png';
import shortolgado1A from './imagenes/shortolgado1A.png';

// Accesrios cabeza para el carrusel
import gorro1 from './imagenes/gorro1.png';
import gorro2 from './imagenes/gorro2.png';
import gorro3 from './imagenes/gorro3.png';
import gorro4 from './imagenes/gorro4.png';
import gorro5 from './imagenes/gorro5.png';

// Accesrios cabeza para dibujar en el avatar
import gorro1A from './imagenes/gorro1A.png';
import gorro2A from './imagenes/gorro2A.png';
import gorro3A from './imagenes/gorro3A.png';
import gorro4A from './imagenes/gorro4A.png';
import gorro5A from './imagenes/gorro5A.png';

// Accesrios cuello para el carrusel
import cuellera1 from './imagenes/cuellera1.png';
import cuellera2 from './imagenes/cuellera2.png';
import cuellera3 from './imagenes/cuellera3.png';
import cuellera4 from './imagenes/cuellera4.png';

// Accesrios cuello para dibujar en el avatar
import cuellera1A from './imagenes/cuellera1A.png';
import cuellera2A from './imagenes/cuellera2A.png';
import cuellera3A from './imagenes/cuellera3A.png';
import cuellera4A from './imagenes/cuellera4A.png';

// Calzado
import zapatos from './imagenes/zapatos1.png';

// Logo
import logo from './imagenes/logo.png';

const App = () => {
    //Menu desplegable
    const tops = [
      {
        image: pmangalarga1,
        name: 'Top 1',
        tipo: 'polo manga larga',
        precio: 160.00,
        colores: ['Blanco', 'Negro'],
        tallas: ['S', 'M', 'L', 'XL'],
        description: 'Un polo manga larga clásico, perfecto para el invierno.',
        LB: 'casual'
      },
      {
        image: pmangalarga2,
        name: 'Top 2',
        tipo: 'polo manga larga',
        precio: 158.00,
        colores: ['Azul', 'Negro'],
        tallas: ['S', 'M', 'L'],
        description: 'Polo manga larga de material suave, ideal para días fríos.',
        LB: 'coctel'
      },
      {
        image: pmangalarga3,
        name: 'Top 3',
        tipo: 'polo manga larga',
        precio: 165.00,
        colores: ['Naranja', 'Verde'],
        tallas: ['S', 'M', 'L'],
        description: 'Polo de manga larga con colores vibrantes para destacar.',
        LB: 'coctel'
      },
      {
        image: pmangalarga4,
        name: 'Top 4',
        tipo: 'polo manga larga',
        precio: 162.00,
        colores: ['Gris', 'Rojo'],
        tallas: ['S', 'M', 'L', 'XL'],
        description: 'Polo de manga larga cómodo y elegante.',
        LB: 'casual'
      },
      {
        image: pmangalarga5,
        name: 'Top 5',
        tipo: 'polo manga larga',
        precio: 170.00,
        colores: ['Verde', 'Azul'],
        tallas: ['S', 'M', 'L', 'XL'],
        description: 'Polo de manga larga con diseño moderno y elegante.',
        LB: 'formal'
      },
      {
        image: pmangalarga6,
        name: 'Top 6',
        tipo: 'polo manga larga',
        precio: 158.00,
        colores: ['Blanco', 'Azul', 'Negro'],
        tallas: ['S', 'M', 'L'],
        description: 'Polo de manga larga perfecto para cualquier ocasión.',
        LB: 'coctel'
      },
      {
        image: pmangalarga7,
        name: 'Top 7',
        tipo: 'polo manga larga',
        precio: 175.00,
        colores: ['Amarillo', 'Negro'],
        tallas: ['S', 'M', 'L', 'XL'],
        description: 'Polo de manga larga con un diseño único y llamativo.',
        LB: 'casual'
      },
      {
        image: pabierto2,
        name: 'Top 9',
        tipo: 'polo abierto',
        precio: 168.00,
        colores: ['Blanco', 'Gris'],
        tallas: ['S', 'M', 'L'],
        description: 'Polo abierto, perfecto para un look casual.',
        LB: 'casual'
      },
      {
        image: poncho1,
        name: 'Top 10',
        tipo: 'Poncho',
        precio: 158.00,
        colores: ['Rosa', 'Azul', 'Negro'],
        tallas: ['S', 'M', 'L'],
        description: 'Poncho elegante y cómodo para días frescos.',
        LB: 'coctel'
      },
      {
        image: poncho2,
        name: 'Top 11',
        tipo: 'Poncho',
        precio: 180.00,
        colores: ['Verde', 'Azul'],
        tallas: ['S', 'M', 'L'],
        description: 'Poncho moderno, ideal para combinar con cualquier outfit.',
        LB: 'casual'
      },
      {
        image: pcorto1,
        name: 'Top 12',
        tipo: 'polo corto',
        precio: 150.00,
        colores: ['Rojo', 'Negro'],
        tallas: ['S', 'M', 'L'],
        description: 'Polo corto para un look veraniego y fresco.',
        LB: 'verano'
      },
      {
        image: chaleco1,
        name: 'Top 13',
        tipo: 'polo corto',
        precio: 170.00,
        colores: ['Rojo', 'Negro'],
        tallas: ['S', 'M', 'L'],
        description: 'Polo corto para un look veraniego y fresco.',
        LB: 'verano'
      },
      {
        image: polo1,
        name: 'Top 14',
        tipo: 'polo corto',
        precio: 160.00,
        colores: ['Rojo', 'Negro'],
        tallas: ['S', 'M', 'L'],
        description: 'Polo corto para un look veraniego y fresco.',
        LB: 'verano'
      },
      {
        image: vestido1,
        name: 'Top 15',
        tipo: 'Vestido',
        precio: 200.00,
        colores: ['Blanco', 'Azul', 'Negro'],
        tallas: ['S', 'M', 'L'],
        description: 'Vestido elegante para ocasiones especiales.',
        LB: 'coctel'
      },     
    ];    
    const selectTop = (index) => {};
    const bottoms = [{
        image: pantolgado1,
        name: 'Pantalon 1',
        tipo: 'Pantalon olgado',
        price: '$30.00',
        colors: ['Azul', 'Verde'],
        sizes: ['30', '32', '34'],
        description: 'Descripción del Pant 1',
        LB: 'coctel'
      },
      {
        image: jean1,
        name: 'Pantalon 2',
        tipo: 'Jeans',
        price: '$30.00',
        colors: ['Azul', 'Rosa'],
        sizes: ['30', '32', '34'],
        description: 'Descripción del Pant 2',
        LB: 'coctel'
      },
      {
        image: shortolgado1A,
        name: 'Pantalon 3',
        tipo: 'Short',
        price: '$30.00',
        colors: ['Azul', 'Negro'],
        sizes: ['30', '32', '34'],
        description: 'Descripción del Pant 3',
        LB: 'coctel'
      },
    ]; // declara un array de tops
    const selectBottom = (index) => {};

    const AccesorioCuello = [{
        image: cuellera1,
        name: 'Cuellera 1',
        tipo: 'Scarf',
        price: '$15.00',
        colors: ['Rosa', 'Azul'],
        sizes: ['One Size'],
        description: 'Descripción de la Cuellera 1',
        LB: 'coctel'
      },
      {
        image: cuellera2,
        name: 'Cuellera 2',
        tipo: 'Scarf',
        price: '$15.00',
        colors: ['Verde', 'Naranja'],
        sizes: ['One Size'],
        description: 'Descripción de la Cuellera 2',
        LB: 'coctel'
      },
      {
        image: cuellera3,
        name: 'Cuellera 3',
        tipo: 'Scarf',
        price: '$15.00',
        colors: ['Verde', 'Naranja'],
        sizes: ['One Size'],
        description: 'Descripción de la Cuellera 3',
        LB: 'coctel'
      },
      {
        image: cuellera4,
        name: 'Cuellera 4',
        tipo: 'Scarf',
        price: '$15.00',
        colors: ['Verde', 'Naranja'],
        sizes: ['One Size'],
        description: 'Descripción de la Cuellera 4',
        LB: 'coctel'
      },
    ]; // declara un array de tops
    const selectAccesorioCuello = (index) => {};

    const AccesorioCabeza = [{
        image: gorro1,
        name: 'Gorro 1',
        tipo: 'Hat',
        price: '$10.00',
        colors: ['Negro', 'Verde'],
        sizes: ['One Size'],
        description: 'Descripción del Gorro 1',
        LB: 'coctel'
      },
      {
        image: gorro2,
        name: 'Gorro 2',
        tipo: 'Hat',
        price: '$10.00',
        colors: ['Negro', 'Azul'],
        sizes: ['One Size'],
        description: 'Descripción del Gorro 2',
        LB: 'coctel'
      },
      {
        image: gorro3,
        name: 'Gorro 3',
        tipo: 'Hat',
        price: '$10.00',
        colors: ['Negro', 'Naranja'],
        sizes: ['One Size'],
        description: 'Descripción del Gorro 3',
        LB: 'coctel'
      },
      {
        image: gorro4,
        name: 'Gorro 4',
        tipo: 'Hat',
        price: '$10.00',
        colors: ['Negro', 'Naranja'],
        sizes: ['One Size'],
        description: 'Descripción del Gorro 4',
        LB: 'coctel'
      },
      {
        image: gorro5,
        name: 'Gorro 5',
        tipo: 'Hat',
        price: '$10.00',
        colors: ['Negro', 'Naranja'],
        sizes: ['One Size'],
        description: 'Descripción del Gorro 5',
        LB: 'coctel'
      },
    ]; // declara un array de tops
    const selectAccesorioCabeza = (index) => {};

    const [selectedMenuItem, setSelectedMenuItem] = useState(null);

    //filtros
    const [filter, setFilter] = useState('all'); 

    const filteredTops = tops.filter(top => {
      if (filter === 'all') return true;
      if (filter === 'mangalarga' && top.image.includes('mangalarga')) return true;
      if (filter === 'abierto' && top.image.includes('abierto')) return true;
      if (filter === 'poncho' && top.image.includes('poncho')) return true;
      if (filter === 'corto' && top.image.includes('corto')) return true;
      if (filter === 'chaleco' && top.image.includes('chaleco')) return true;
      if (filter === 'polo' && top.image.includes('polo')) return true;
      if (filter === 'vestido' && top.image.includes('vestido')) return true;
      return false;
    });

    const [bottomFilter, setBottomFilter] = useState('all');

    const filteredBottoms = bottoms.filter(bottom => {
      if (bottomFilter === 'all') return true;
      if (bottomFilter === 'pantolgado' && bottom.image.includes('pantolgado')) return true;
      if (bottomFilter === 'jean' && bottom.image.includes('jean')) return true;
      if (bottomFilter === 'shortolgado' && bottom.image.includes('shortolgado')) return true;
      return false;
    });

    const [selectedTalla, setSelectedTalla] = useState(''); // Para tops
    const [selectedBottomTalla, setSelectedBottomTalla] = useState(''); // Para pantalones
    const [selectedCuelloTalla, setSelectedCuelloTalla] = useState(''); // Para accesorios de cuello
    const [selectedCabezaTalla, setSelectedCabezaTalla] = useState(''); // Para accesorios de cabeza

    const handleTallaChange = (e) => {
      setSelectedTalla(e.target.value);
    };

    const handleBottomTallaChange = (e) => {
      setSelectedBottomTalla(e.target.value);
    };

    const handleCuelloTallaChange = (e) => {
      setSelectedCuelloTalla(e.target.value);
    };

    const handleCabezaTallaChange = (e) => {
      setSelectedCabezaTalla(e.target.value);
    };

    const handleAddToBag = (prenda) => {
      console.log(`Prenda añadida al carrito: ${prenda.name}, Talla: ${selectedTalla}`);
      // Lógica para añadir la prenda al carrito
    };

    const colorMap = {
      'Azul': '#0000FF',
      'Negro': '#000000',
      'Naranja': '#FFA500',
      'Verde': '#008000',
      'Cafe': '#8B4513',
      'Blanco': '#FFFFFF',
      'Rosa': '#FFC0CB',
      // Agrega más colores según sea necesario
    };

    const ColorCircle = ({ color, isSelected, onClick }) => {
      return (
        <div 
          onClick={onClick}
          style={{
            backgroundColor: color,
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            display: 'inline-block',
            margin: '0 5px',
            border: isSelected ? '2px solid #000' : '1px solid #000',
            cursor: 'pointer'
          }}
          title={color}
        ></div>
      );
    };
    const [selectedColorTop, setSelectedColorTop] = useState(null);
    const [selectedColorBottom, setSelectedColorBottom] = useState(null);
    const [selectedColorCabeza, setSelectedColorCabeza] = useState(null);
    const [selectedColorCuello, setSelectedColorCuello] = useState(null);

    // PANTALLA COMPLETA
    const [fullWindow, setFullWindow] = useState(false);

    const toggleFullscreen = () => {
      setFullWindow(!fullWindow);
    };

    const handleFullWindow = () => {
      setFullWindow(fullWindow);
    };


    useEffect(() => {
      document.getElementById('ventana-completa-btn').addEventListener('click', toggleFullscreen);
      return () => {
        document.getElementById('ventana-completa-btn').removeEventListener('click', toggleFullscreen);
      };
    }, [toggleFullscreen]);

    const [showAvatarList, setShowAvatarList] = useState(false);
    const avatars = [avatarImage1, avatarImage2, avatarImage3, avatarImage4, avatarImage5];
    const avatarImages = {
      0: avatarImage1,
      1: avatarImage2,
      2: avatarImage3,
      3: avatarImage4,
      4: avatarImage5,
    };

    const avatarAdjustmentFactorsShirts = {
      0: 1,
      1: 0.95,
      2: 1,
      3: 1,
      4: 1
    };

    const avatarAdjustmentFactorsCabezawidth = {
      0: 1,
      1: 1,
      2: 1.1,
      3: 1,
      4: 1.09
    };

    const avatarAdjustmentFactorsCabezaheight = {
      0: 1,
      1: 1,
      2: 1,
      3: 1,
      4: 1
    };

    const avatarAdjustmentFactorsCuellowidth = {
      0: 1,
      1: 1.05,
      2: 1.1,
      3: 1.1,
      4: 1
    };

    const avatarAdjustmentFactorsCuelloheight = {
      0: 1,
      1: 1,
      2: 1,
      3: 1,
      4: 1
    };

    const avatarAdjustmentFactorsPantswidth = {
      0: 1.05,
      1: 1,
      2: 1.05,
      3: 1.04,
      4: 1.07
    };

    const avatarAdjustmentFactorsPantsheight = {
      0: 0.98,
      1: 0.85,
      2: 0.8,
      3: 0.90,
      4: 0.85
    };

    const avatarPolosAdjustmentoffsetsX = {
      0: 1.05,
      1: 0.9,
      2: 1,
      3: 1.05,
      4: 1
    };
    const avatarPolosAdjustmentoffsetsY = {
      0: 1,
      1: 0.9,
      2: 1,
      3: 1,
      4: 1
    }
    const avatarPantalonesAdjustmentoffsetsX = {
      0: 1,
      1: 1.04,
      2: 1.05,
      3: 1.05,
      4: 1.11
    };
    const avatarPantalonesAdjustmentoffsetsY = {
      0: 1.1,
      1: 1,
      2: 1,
      3: 1,
      4: 1.05
    }
    const avatarCuelloAdjustmentoffsetsX = {
      0: 1,
      1: 0.97,
      2: 0.9,
      3: 0.94,
      4: 1
    }
    const avatarCuelloAdjustmentoffsetsY = {
      0: 1,
      1: 1,
      2: 1,
      3: 1,
      4: 1
    }
    const avatarCabezaAdjustmentoffsetsX = {
      0: 1,
      1: 1,
      2: 0.9,
      3: 1,
      4: 0.97
    }
    const avatarCabezaAdjustmentoffsetsY = {
      0: 1,
      1: 1,
      2: 1.05,
      3: 1,
      4: 1
    }

    const handleShowAvatarList = () => {
      setShowAvatarList(true);
    };

    const handleHideAvatarList = () => {
      setShowAvatarList(false);
    };

    const [selectedAvatar, setSelectedAvatar] = useState(0);

    const handleChangeAvatar = (index) => {
      setSelectedAvatar(index);
    };

    useEffect(() => {
      if (selectedAvatar !== 0) {
        handleHideAvatarList();
      }
    }, [selectedAvatar]);


    const [overlayVisible, setOverlayVisible] = useState(false);

    const toggleOverlay = () => {
      setOverlayVisible(!overlayVisible);
    };

    // CARRUSEL PARA LAS PRENDAS 
    const polos = [pmangalarga1A, pmangalarga2A, pmangalarga3A, pmangalarga4A, pmangalarga5A, pmangalarga6A, pmangalarga7A, pabierto2A, poncho1A, poncho2A, pcorto1A, chaleco1A, polo1, vestido1A];
    const pantalones = [pantolgado1A, jean1A, shortolgado1A];
    const cuellos = [cuellera1A, cuellera2A, cuellera3A, cuellera4A];
    const cabezas = [gorro1A, gorro2A, gorro3A, gorro4A, gorro5A];

    const poloCarouselImages = [pmangalarga1, pmangalarga2, pmangalarga3, pmangalarga4, pmangalarga5, pmangalarga6, pmangalarga7, pabierto2, poncho1, poncho2, pcorto1, chaleco1, polo1A, vestido1];
    const pantalonCarouselImages = [pantolgado1, jean1, shortolgado1];
    const cuelloCarouselImages = [cuellera1, cuellera2, cuellera3, cuellera4];
    const cabezaCarouselImages = [gorro1, gorro2, gorro3, gorro4, gorro5];

    const [topIndex, setTopIndex] = useState(0);
    const [bottomIndex, setBottomIndex] = useState(0);
    const [cuelloIndex, setCuelloIndex] = useState(0);
    const [cabezaIndex, setCabezaIndex] = useState(0);

    const handleSwapBottomsLeft = () => {
      setBottomIndex(prevIndex => {
        const newIndex = (prevIndex - 1 + pantalones.length) % pantalones.length;
        setSelectedBottom(bottoms[newIndex]);
        return newIndex;
      });
    };

    const handleSwapBottomsRight = () => {
      setBottomIndex(prevIndex => {
        const newIndex = (prevIndex + 1) % pantalones.length;
        setSelectedBottom(bottoms[newIndex]);
        return newIndex;
      });
    };

    const [tipoPrenda, setTipoPrenda] = useState('polos');

    const handleSwapTopsLeft = () => {
      if (tipoPrenda === 'polos') {
        setTopIndex((prevIndex) => (prevIndex - 1 + polos.length) % polos.length);
        setSelectedTop(tops[(topIndex - 1 + polos.length) % polos.length]);
      } else if (tipoPrenda === 'accesoriosCabeza') {
        setCabezaIndex((prevIndex) => (prevIndex - 1 + cabezas.length) % cabezas.length);
        setSelectedCabeza(AccesorioCabeza[(cabezaIndex - 1 + cabezas.length) % cabezas.length]);
      } else if (tipoPrenda === 'accesoriosCuello') {
        setCuelloIndex((prevIndex) => (prevIndex - 1 + cuellos.length) % cuellos.length);
        setSelectedCuello(AccesorioCuello[(cuelloIndex - 1 + cuellos.length) % cuellos.length]);
      }
    };

    const handleSwapTopsRight = () => {
      if (tipoPrenda === 'polos') {
        setTopIndex((prevIndex) => (prevIndex + 1) % polos.length);
        setSelectedTop(tops[(topIndex + 1) % polos.length]);
      } else if (tipoPrenda === 'accesoriosCabeza') {
        setCabezaIndex((prevIndex) => (prevIndex + 1) % cabezas.length);
        setSelectedCabeza(AccesorioCabeza[(cabezaIndex + 1) % cabezas.length]);
      } else if (tipoPrenda === 'accesoriosCuello') {
        setCuelloIndex((prevIndex) => (prevIndex + 1) % cuellos.length);
        setSelectedCuello(AccesorioCuello[(cuelloIndex + 1) % cuellos.length]);
      }
    };

    const handleClicMenu = (tipo) => {
      setTipoPrenda(tipo);
    };

    const leftTop = poloCarouselImages[topIndex];
    const rightTop = poloCarouselImages[(topIndex + 1) % polos.length];
    const leftBottom = pantalonCarouselImages[bottomIndex];
    const rightBottom = pantalonCarouselImages[(bottomIndex + 1) % pantalones.length];
    const leftCuello = cuelloCarouselImages[cuelloIndex];
    const rightCuello = cuelloCarouselImages[(cuelloIndex + 1) % cuellos.length];
    const leftCabeza = cabezaCarouselImages[cabezaIndex];
    const rightCabeza = cabezaCarouselImages[(cabezaIndex + 1) % cabezas.length];

    const [dibujarCabeza, setDibujarCabeza] = useState(false);
    const [dibujarCuello, setDibujarCuello] = useState(false);

    const handleQuitarAccesorio = (tipo) => {
      if (tipo === 'cabeza') {
        setDibujarCabeza(false);
      } else if (tipo === 'cuello') {
        setDibujarCuello(false);
      }
    };

    const handlePonerAccesorio = (tipo) => {
      if (tipo === 'cabeza') {
        setDibujarCabeza(true);
      } else if (tipo === 'cuello') {
        setDibujarCuello(true);
      }
    };

    const [selectedTop, setSelectedTop] = useState(tops[0]);
    const [selectedBottom, setSelectedBottom] = useState(bottoms[0]);
    const [selectedCuello, setSelectedCuello] = useState(AccesorioCuello[0]);
    const [selectedCabeza, setSelectedCabeza] = useState(AccesorioCabeza[0]);


    const categories = ['coctel', 'pasear verano', 'abrigo', 'tarde de café', 'salida elegante', 'trabajo'];

    // Prendas predefinidas para cada categoría
    const predefinedClothes = {
      'coctel': [pabierto1A, jean1A, cuellera1A],
      'pasear verano': [pmangalarga2A, shortolgado1A, cuellera2A],
      'abrigo': [pmangalarga2A, pantolgado1A, cuellera2A],
      'tarde de café': [pmangalarga2A, jean1A, cuellera2A],
      'salida elegante': [pmangalarga2A, jean1A, cuellera2A],
      'trabajo': [pmangalarga2A, jean1A, cuellera2A]
    };
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (e) => {
      const category = e.target.value;
      setSelectedCategory(category);
      if (category) {
        const selectedClothes = predefinedClothes[category];
      }
    };
    // Referencia al canvas donde se dibujará la pose
    const canvasRef = useRef(null);

    // Estado para almacenar la detección de poses
    const [pose, setPose] = useState(null);

    // Cargar MediaPipe Pose al inicializar el componente
    useEffect(() => {
      const pose = new Pose({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`,
      });

      pose.setOptions({
        modelComplexity: 1,
        smoothLandmarks: true,
        enableSegmentation: true,
        smoothSegmentation: true,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5,
      });

      pose.onResults(onResults);

      setPose(pose);
    }, []);

    const detectPose = async (image) => {
      if (pose) {
        await pose.send({
          image
        });
      }
    };


    const onResults = (results) => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      canvas.width = 840; // nuevo ancho
      canvas.height = 1180; // nueva altura
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const img = new Image();
      img.src = avatarImages[selectedAvatar];

      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        if (results.poseLandmarks) {
          // Función para cargar una imagen y devolver una promesa
          const loadImage = (src) => {
            return new Promise((resolve) => {
              const image = new Image();
              image.src = src;
              image.onload = () => resolve(image);
            });
          };

          // Crear un array de promesas para todas las imágenes
          const promises = [
            loadImage(pantalones[bottomIndex]),
            loadImage(polos[topIndex]),
            loadImage(cuellos[cuelloIndex]),
            loadImage(cabezas[cabezaIndex])
          ];

          // Esperar a que todas las imágenes se carguen
          Promise.all(promises).then(([pantsImage, shirtImage, cuelloImage, cabezaImage]) => {
            // Dibujar las prendas en el canvas
            const nombrePantalon = pantalonCarouselImages[bottomIndex].split('/').pop(); // obtiene el nombre de la imagen
            const tipoPantalonActual = detectarTipoPantalon(nombrePantalon);
            drawPants(results.poseLandmarks, ctx, pantsImage, tipoPantalonActual);

            const nombrePolo = poloCarouselImages[topIndex].split('/').pop(); // obtiene el nombre de la imagen
            const tipoPoloActual = detectarTipoPolo(nombrePolo);
            drawShirt(results.poseLandmarks, ctx, shirtImage, tipoPoloActual);

            const nombreACuello = cuelloCarouselImages[cuelloIndex].split('/').pop(); // obtiene el nombre de la imagen
            const tipoACuelloActual = detectarTipoACuello(nombreACuello);
            drawCuello(results.poseLandmarks, ctx, cuelloImage, tipoACuelloActual);

            const nombreACabeza = cabezaCarouselImages[cabezaIndex].split('/').pop(); // obtiene el nombre de la imagen
            const tipoACabezaActual = detectarTipoACabeza(nombreACabeza);
            drawCabeza(results.poseLandmarks, ctx, cabezaImage, tipoACabezaActual);

            // Captura la imagen después de dibujar todo
            captureCanvas();
          });
        }
      };
    };

    useEffect(() => {
      if (pose) {
        onResults({
          poseLandmarks: pose.poseLandmarks
        });
      }
    }, [pose, topIndex, bottomIndex, cuelloIndex, cabezaIndex, dibujarCabeza, dibujarCuello]);


    const tiposDePolos = {
      'polo': {
        multiplicadorDeAncho: 1.7,
        multiplicadorDeAltura: 1.2,
        multiplicadorDeOffsetX: 5,
        multiplicadorDeOffsetY: 7.9
      },
      'pcorto': {
        multiplicadorDeAncho: 1.78,
        multiplicadorDeAltura: 1.1,
        multiplicadorDeOffsetX: 5.7,
        multiplicadorDeOffsetY: 6
      },
      'poncho': {
        multiplicadorDeAncho: 1.7,
        multiplicadorDeAltura: 2.2,
        multiplicadorDeOffsetX: 5.7,
        multiplicadorDeOffsetY: 7
      },
      'pmangalarga': {
        multiplicadorDeAncho: 1.6,
        multiplicadorDeAltura: 1.25,
        multiplicadorDeOffsetX: 5.3,
        multiplicadorDeOffsetY: 7.2
      },
      'pcuellolargo': {
        multiplicadorDeAncho: 1.7,
        multiplicadorDeAltura: 1.45,
        multiplicadorDeOffsetX: 4.8,
        multiplicadorDeOffsetY: 5.5
      },
      'pchcmangas': {
        multiplicadorDeAncho: 1.6,
        multiplicadorDeAltura: 1.35,
        multiplicadorDeOffsetX: 6,
        multiplicadorDeOffsetY: 9
      },
      'pcaidadistinta': {
        multiplicadorDeAncho: 1.65,
        multiplicadorDeAltura: 1.35,
        multiplicadorDeOffsetX: 5,
        multiplicadorDeOffsetY: 6.5
      },
      'chaleco': {
        multiplicadorDeAncho: 1.4,
        multiplicadorDeAltura: 1.5,
        multiplicadorDeOffsetX: 9,
        multiplicadorDeOffsetY: 6.9
      },
      'pabierto': {
        multiplicadorDeAncho: 1.7,
        multiplicadorDeAltura: 1.3,
        multiplicadorDeOffsetX: 4.7,
        multiplicadorDeOffsetY: 6.5
      },
      'vestido': {
        multiplicadorDeAncho: 1.5,
        multiplicadorDeAltura: 1.5,
        multiplicadorDeOffsetX: 5.5,
        multiplicadorDeOffsetY: 9.6
      },
      // Agregue más tipos de prendas según sea necesario
    };

    const tiposDePantalones = {
      'pantolgado': {
        multiplicadorDeAncho: 2.1,
        multiplicadorDeAltura: 2.9,
        multiplicadorDeOffsetX: 3.5,
        multiplicadorDeOffsetY: 5
      },
      'jean': {
        multiplicadorDeAncho: 1.9,
        multiplicadorDeAltura: 2.9,
        multiplicadorDeOffsetX: 4.2,
        multiplicadorDeOffsetY: 5
      },
      'shortolgado': {
        multiplicadorDeAncho: 2.2,
        multiplicadorDeAltura: 1.3,
        multiplicadorDeOffsetX: 3.5,
        multiplicadorDeOffsetY: 2
      }
      // Agregue más tipos de prendas según sea necesario
    };

    const tiposDeAccesorioCuello = {
      'cuellera': {
        multiplicadorDeAncho: 0.6,
        multiplicadorDeAltura: 1,
        multiplicadorDeOffsetX: 0.74,
        multiplicadorDeOffsetY: 2
      }
      // Agregue más tipos de prendas según sea necesario
    };

    const tiposDeAccesorioCabeza = {
      'gorro1': {
        multiplicadorDeAncho: 0.56,
        multiplicadorDeAltura: 0.8,
        multiplicadorDeOffsetX: 0.725,
        multiplicadorDeOffsetY: 0.48
      },
      'gorro2': {
        multiplicadorDeAncho: 0.65,
        multiplicadorDeAltura: 2,
        multiplicadorDeOffsetX: 0.77,
        multiplicadorDeOffsetY: 1.2
      },
      'gorro3': {
        multiplicadorDeAncho: 0.65,
        multiplicadorDeAltura: 0.85,
        multiplicadorDeOffsetX: 0.79,
        multiplicadorDeOffsetY: 0.47
      },
      'gorro': {
        multiplicadorDeAncho: 0.56,
        multiplicadorDeAltura: 0.8,
        multiplicadorDeOffsetX: 0.725,
        multiplicadorDeOffsetY: 0.48
      },
      // Agregue más tipos de prendas según sea necesario
    };

    const detectarTipoACabeza = (nombreACabeza) => {
      const partesNombre = nombreACabeza.split('.');
      const tipoMatch = partesNombre[0].match(/(gorro1|gorro2|gorro3|gorro)/);
      if (tipoMatch) {
        const tipo = tipoMatch[0];
        return tiposDeAccesorioCabeza[tipo];
      } else {
        console.error('Tipo de prenda no reconocido:', nombreACabeza);
        return null; // O alguna prenda por defecto
      }
    };

    const detectarTipoACuello = (nombreACuello) => {
      const partesNombre = nombreACuello.split('.');
      const tipoMatch = partesNombre[0].match(/(cuellera)/);
      if (tipoMatch) {
        const tipo = tipoMatch[0];
        return tiposDeAccesorioCuello[tipo];
      } else {
        console.error('Tipo de prenda no reconocido:', nombreACuello);
        return null; // O alguna prenda por defecto 
      }
    };

    const detectarTipoPolo = (nombrePolo) => {
      const partesNombre = nombrePolo.split('.');
      const tipoMatch = partesNombre[0].match(/(polo|poncho|pmangalarga|pcuellolargo|pcaidadistinta|pchcmangas|pabierto|vestido|pcorto|chaleco)/);
      if (tipoMatch) {
        const tipo = tipoMatch[0];
        return tiposDePolos[tipo];
      } else {
        console.error('Tipo de prenda no reconocido:', nombrePolo);
        return null; // O alguna prenda por defecto
      }
    };

    const detectarTipoPantalon = (nombrePantalon) => {
      const partesNombre = nombrePantalon.split('.');
      const tipoMatch = partesNombre[0].match(/(pantolgado|jean|shortolgado)/);
      if (tipoMatch) {
        const tipo = tipoMatch[0];
        return tiposDePantalones[tipo];
      } else {
        console.error('Tipo de prenda no reconocido:', nombrePantalon);
        return null; // O alguna prenda por defecto
      }
    };

    const drawCuello = (poseLandmarks, ctx, cuelloImage, tipoACuelloActual) => {
      if (!dibujarCuello) return;
      const leftear = poseLandmarks[7]; // punto de referencia del hombro izquierdo 
      const rightear = poseLandmarks[8]; // punto de referencia del hombro derecho
      const leftshoulder = poseLandmarks[12]; // punto de referencia de la cadera izquierda
      const rightshoulder = poseLandmarks[11]; // punto de referencia de la cadera derecha

      if (!leftear || !rightear || !leftshoulder || !rightshoulder) return;

      // Ajusta el tamaño de la camiseta basado en las distancias entre los puntos de referencia
      const shoulderEar = Math.abs(leftear.x - rightear.x) * canvasRef.current.width;
      const shoulderWidth = Math.abs(leftshoulder.x - rightshoulder.x) * canvasRef.current.width;

      const valoresDeTipoDePrenda = tipoACuelloActual;
      const avatarAdjustmentFactorW = avatarAdjustmentFactorsCuellowidth[selectedAvatar];
      const avatarAdjustmentFactorH = avatarAdjustmentFactorsCuelloheight[selectedAvatar];
      const avatarAdjustmentoffsetX = avatarCuelloAdjustmentoffsetsX[selectedAvatar];
      const avatarAdjustmentoffsetY = avatarCuelloAdjustmentoffsetsY[selectedAvatar];

      const headtWidth = Math.max(shoulderWidth, shoulderEar) * valoresDeTipoDePrenda.multiplicadorDeAncho * avatarAdjustmentFactorW;
      const headtHeight = Math.abs(leftear.y - leftshoulder.y) * canvasRef.current.height * valoresDeTipoDePrenda.multiplicadorDeAltura * avatarAdjustmentFactorH;
      const offsetX = (rightshoulder.x * canvasRef.current.width) - (headtWidth / valoresDeTipoDePrenda.multiplicadorDeOffsetX * avatarAdjustmentoffsetX);
      const offsetY = (rightshoulder.y * canvasRef.current.height) - (headtHeight / valoresDeTipoDePrenda.multiplicadorDeOffsetY * avatarAdjustmentoffsetY);

      ctx.drawImage(cuelloImage, offsetX, offsetY, headtWidth, headtHeight);
    };
    const drawCabeza = (poseLandmarks, ctx, cabezaImage, tipoACabezaActual) => {
      if (!dibujarCabeza) return;
      const leftear = poseLandmarks[7];
      const rightear = poseLandmarks[8];
      const leftshoulder = poseLandmarks[12]; // punto de referencia de la cadera izquierda
      const rightshoulder = poseLandmarks[11]; // punto de referencia de la cadera derecha

      if (!leftear || !rightear || !leftshoulder || !rightshoulder) return;

      // Ajusta el tamaño de la camiseta basado en las distancias entre los puntos de referencia
      const EarWidth = Math.abs(leftear.x - rightear.x) * canvasRef.current.width;
      const shoulderWidth = Math.abs(leftshoulder.x - rightshoulder.x) * canvasRef.current.width;

      const valoresDeTipoDePrenda = tipoACabezaActual;
      const avatarAdjustmentFactorW = avatarAdjustmentFactorsCabezawidth[selectedAvatar];
      const avatarAdjustmentFactorH = avatarAdjustmentFactorsCabezaheight[selectedAvatar];
      const avatarAdjustmentoffsetX = avatarCabezaAdjustmentoffsetsX[selectedAvatar];
      const avatarAdjustmentoffsetY = avatarCabezaAdjustmentoffsetsY[selectedAvatar];

      const headtWidth = Math.max(shoulderWidth, EarWidth) * valoresDeTipoDePrenda.multiplicadorDeAncho * avatarAdjustmentFactorW;
      const headtHeight = Math.abs(leftear.y - leftshoulder.y) * canvasRef.current.height * valoresDeTipoDePrenda.multiplicadorDeAltura * avatarAdjustmentFactorH;
      const offsetX = (rightshoulder.x * canvasRef.current.width) - (headtWidth / valoresDeTipoDePrenda.multiplicadorDeOffsetX * avatarAdjustmentoffsetX);
      const offsetY = (rightshoulder.y * canvasRef.current.height) - (headtHeight / valoresDeTipoDePrenda.multiplicadorDeOffsetY * avatarAdjustmentoffsetY);

      ctx.drawImage(cabezaImage, offsetX, offsetY, headtWidth, headtHeight);
    };

    // Función para dibujar la camiseta en el canvas
    const drawShirt = (poseLandmarks, ctx, shirtImage, tipoPoloActual) => {
      const leftShoulder = poseLandmarks[11]; // punto de referencia del hombro izquierdo 
      const rightShoulder = poseLandmarks[12]; // punto de referencia del hombro derecho
      const leftHip = poseLandmarks[23]; // punto de referencia de la cadera izquierda
      const rightHip = poseLandmarks[24]; // punto de referencia de la cadera derecha

      if (!leftShoulder || !rightShoulder || !leftHip || !rightHip) return;

      // Ajusta el tamaño de la camiseta basado en las distancias entre los puntos de referencia
      const EarWidth = Math.abs(leftShoulder.x - rightShoulder.x) * canvasRef.current.width;
      const hipWidth = Math.abs(leftHip.x - rightHip.x) * canvasRef.current.width;

      const valoresDeTipoDePrenda = tipoPoloActual;
      const avatarAdjustmentFactor = avatarAdjustmentFactorsShirts[selectedAvatar];
      const avatarAdjustmentoffsetX = avatarPolosAdjustmentoffsetsX[selectedAvatar];
      const avatarAdjustmentoffsetY = avatarPolosAdjustmentoffsetsY[selectedAvatar];

      const shirtWidth = Math.max(EarWidth, hipWidth) * valoresDeTipoDePrenda.multiplicadorDeAncho * avatarAdjustmentFactor;
      const shirtHeight = Math.abs(leftShoulder.y - leftHip.y) * canvasRef.current.height * valoresDeTipoDePrenda.multiplicadorDeAltura;
      const offsetX = (rightShoulder.x * canvasRef.current.width) - (shirtWidth / valoresDeTipoDePrenda.multiplicadorDeOffsetX * avatarAdjustmentoffsetX);
      const offsetY = (rightShoulder.y * canvasRef.current.height) - (shirtHeight / valoresDeTipoDePrenda.multiplicadorDeOffsetY * avatarAdjustmentoffsetY);

      ctx.drawImage(shirtImage, offsetX, offsetY, shirtWidth, shirtHeight);
    };

    // Función para dibujar los pantalones en el canvas 
    const drawPants = (poseLandmarks, ctx, pantsImage, tipoPantalonActual) => {
      const leftHip = poseLandmarks[23]; // punto de referencia de la cadera izquierda
      const rightHip = poseLandmarks[24]; // punto de referencia de la cadera derecha
      const leftKnee = poseLandmarks[25]; // punto de referencia de la rodilla izquierda
      const rightKnee = poseLandmarks[26]; // punto de referencia de la rodilla derecha

      if (!leftHip || !rightHip || !leftKnee || !rightKnee) return;

      // Ajusta el tamaño del pantalón basado en las distancias entre los puntos de referencia
      const hipWidth = Math.abs(leftHip.x - rightHip.x) * canvasRef.current.width;
      const hipToKneeHeight = Math.abs(leftHip.y - leftKnee.y) * canvasRef.current.height;

      const valoresDeTipoDePrenda = tipoPantalonActual;
      const avatarAdjustmentFactorW = avatarAdjustmentFactorsPantswidth[selectedAvatar];
      const avatarAdjustmentFactorH = avatarAdjustmentFactorsPantsheight[selectedAvatar];
      const avatarAdjustmentoffsetX = avatarPantalonesAdjustmentoffsetsX[selectedAvatar];
      const avatarAdjustmentoffsetY = avatarPantalonesAdjustmentoffsetsY[selectedAvatar];

      const pantsWidth = hipWidth * valoresDeTipoDePrenda.multiplicadorDeAncho * avatarAdjustmentFactorW;
      const pantsHeight = hipToKneeHeight * valoresDeTipoDePrenda.multiplicadorDeAltura * avatarAdjustmentFactorH;
      const offsetX = (rightHip.x * canvasRef.current.width) - (pantsWidth / valoresDeTipoDePrenda.multiplicadorDeOffsetX * avatarAdjustmentoffsetX);
      const offsetY = (rightHip.y * canvasRef.current.height) - (pantsHeight / valoresDeTipoDePrenda.multiplicadorDeOffsetY * avatarAdjustmentoffsetY);

      ctx.drawImage(pantsImage, offsetX, offsetY, pantsWidth, pantsHeight);
    };

    useEffect(() => {
      if (pose) {
        const img = new Image();
        img.src = avatarImages[selectedAvatar];

        img.onload = async () => {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext('2d');

          // Limpia el canvas
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          await detectPose(img);
        };
      }
    }, [selectedAvatar, pose, topIndex, bottomIndex, cuelloIndex]);

    const [canvasImage, setCanvasImage] = useState(null);

    const captureCanvas = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        const imageUrl = canvas.toDataURL(); // Captura la imagen del canvas como data URL
        setCanvasImage(imageUrl); // Actualiza el estado con la imagen
      }
    };

  return (
    <div>
      {fullWindow ? null : (
        <>
          <Header />
          <div className='menu'>
            <Menu logo={logo} />
          </div>
        </>
      )}
      <div className={`contenedor-principal ${fullWindow ? 'full-window-mode' : ''} ${selectedMenuItem === 'see-tops'? 'left-menu-expanded' : ''} ${selectedMenuItem === 'see-bottoms'? 'left-menu-expanded' : ''}
      ${selectedMenuItem === 'see-head'? 'left-menu-expanded' : ''} ${selectedMenuItem === 'see-cuello'? 'left-menu-expanded' : ''}`}>
        <div className='submenu'>
        <nav className="nav">
      <div className="section">
        <p>The Closet</p>
      </div>
      <div className="opciones"> 
        <ul className="leftNavList">
          <li>
          <select className='dropdown' value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Look Book</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          </li>
        </ul> 
        <ul className="rightNavList">
          <li><button className="buttonF">♡ Ver favoritos</button></li>
        </ul>
      </div>
    </nav>  
        </div>
        <div className='contenedorapp'>
          <div className={`left-menu ${selectedMenuItem === 'see-tops' ? 'left-menu-expanded' : ''}`}>
            <div className="menu-item clickable" onClick={handleShowAvatarList}>
              <span>
              Change Your Model 
              </span>
              {avatarImages && selectedAvatar !== null && (
                <img src={avatarImages[selectedAvatar]} alt="Current Avatar" className="avatar-image" />
              )}
            </div>
            <div className="menu-item clickable" onClick={() => handleClicMenu('polos')}>
              Ver polos
              <img src={leftTop} alt="Top Seleccionado" className='tops' />
              <button className="clickable" onClick={() => setSelectedMenuItem('see-tops')}>ver más</button>
            </div>
            <div className="menu-item clickable" >
              Ver pantalones
              <img src={leftBottom} alt="Fondo Seleccionado" className='buttoms' />
              <button className="clickable" onClick={() => setSelectedMenuItem('see-bottoms')}>ver más</button>
            </div> 
            <div className="menu-item" onClick={() => handleClicMenu('accesoriosCabeza')}>
              Accesrios cabeza 
              <img src={leftCabeza} alt="Accesorio para la cabeza Seleccionado" className='tops' />
              <div className="accesorios-botones"> 
                <div className='quitar-poner'>
                <button className='quitar' onClick={() => handleQuitarAccesorio('cabeza')}>X</button>
                <button className='poner'onClick={() => handlePonerAccesorio('cabeza')}>Poner</button>
                </div>
                <div className='ACvermas'>
                <button className="clickable" onClick={() => setSelectedMenuItem('see-head')}>ver más</button>
                </div>
              </div>
            </div>
            <div className="menu-item" onClick={() => handleClicMenu('accesoriosCuello')}>
              Accesrios cuello
              <img src={leftCuello} alt="Accesorio para el cuello Seleccionado" className='tops' />
              <div className="accesorios-botones">
              <div className='quitar-poner'>         
                <button className='quitar' onClick={() => handleQuitarAccesorio('cuello')}>X</button>
                <button className='poner' onClick={() => handlePonerAccesorio('cuello')}>Poner</button>
                </div>  
                <div className='ACvermas'>
                <button className="clickable" onClick={() => setSelectedMenuItem('see-cuello')}>ver más</button>
                </div>
              </div>
            </div>
            <div className="menu-item">others2</div>
          </div>
          {selectedMenuItem === 'change-model' && (
              <div className="avatar-list-overlay">
              </div>
            )}

            {selectedMenuItem === 'see-tops' && (
              <div className="tops-content">
              <section className='contenedorfiltros'>
              <span className='filtros'>
                <button onClick={() => setFilter('all')}>Todos</button>
                <button onClick={() => setFilter('mangalarga')}>Manga Larga</button>
                <button onClick={() => setFilter('abierto')}>Abierto</button>
                <button onClick={() => setFilter('poncho')}>Ponchos</button>
                <button onClick={() => setFilter('corto')}>Polos cortos</button>
                <button onClick={() => setFilter('polo')}>Polos</button>
                <button onClick={() => setFilter('chaleco')}>Chalecos</button>
                <button onClick={() => setFilter('vestido')}>Vestidos</button>
              </span>
              <span className='opciones-flitro'>
                <button>...</button>
                <button onClick={() => setSelectedMenuItem(null)}>X</button>
              </span>
              </section>  
              <div className='Cont'>
                  {filteredTops.map((top, index) => (
                    <div key={index} className='polos' onClick={() => { selectTop(index); setSelectedTop(top);setTopIndex(index) }}>
                      <div className='imgpolos'>
                        <img src={top.image} alt={`Top ${index}`} />
                      </div>
                      <div className='contenedorpolos'>
                        <p className='description'>{top.description}</p>
                        <p className='tipo'>{top.tipo}</p>
                        <p className='precio'>${top.precio}.00</p>
                      </div>
                    </div>  
                  ))}
                </div>
              </div>
            )}

            {selectedMenuItem === 'see-bottoms' && (
                    <div className="tops-content">
                      <section className='contenedorfiltros'>
                        <span className='filtros'>
                          <button onClick={() => setBottomFilter('all')}>Todos</button>
                          <button onClick={() => setBottomFilter('pantolgado')}>Pantalón Largo</button>
                          <button onClick={() => setBottomFilter('jean')}>Jeans</button>
                          <button onClick={() => setBottomFilter('shortolgado')}>Shorts</button>
                          <button>por definir</button>
                          <button>por definir</button>
                        </span>
                        <span className='opciones-flitro'>
                          <button>...</button>
                          <button onClick={() => setSelectedMenuItem(null)}>X</button>
                        </span>
                      </section>
                      <div className='Cont'>
                        {filteredBottoms.map((bottom, index) => (
                          <div key={index} className='pantalones' onClick={() => { selectBottom(index); setSelectedBottom(bottom);setBottomIndex(index) }}>
                            <div className='imgpantalones'>
                              <img src={bottom.image} alt={`Pantalón ${index}`} />
                            </div>
                            <div className='contenedorpantalones'>
                            <p className='description'>{bottom.description}</p>
                            <p className='tipo'>{bottom.tipo}</p>
                            <p className='precio'>{bottom.price}</p>
                            </div>
                          </div> 
                        ))}
              </div>
            </div>
            )}
            {selectedMenuItem === 'see-head' && (
                    <div className="tops-content">
                    <section className='contenedorfiltros'>
                      <span className='filtros'>
                        <button onClick={() => setFilter('all')}>Todos</button>
                        <button>por definir</button>
                        <button>por definir</button>
                        <button>por definir</button>
                        <button>por definir</button>
                      </span>
                      <span className='opciones-flitro'>
                        <button>...</button>
                        <button onClick={() => setSelectedMenuItem(null)}>X</button>
                      </span>
                    </section >
                    <div className='Cont'>
                      {AccesorioCabeza.map((accessory, index) => (
                        <div key={index} className='accesorios-cabeza' onClick={() => { selectAccesorioCabeza(index); setSelectedCabeza(accessory);setCabezaIndex(index) }}>
                          <div className='imgaccesorios-cabeza'>
                            <img src={accessory.image} alt={`Accesorio Cabeza ${index}`} />
                          </div>
                          <div className='contenedoraccesorios-cabeza'>
                          <p className='description'>{accessory.description}</p>
                            <p className='tipo'>{accessory.tipo}</p>
                            <p className='precio'>{accessory.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}  
            {selectedMenuItem === 'see-cuello' && (
                    <div className="tops-content">
                    <section className='contenedorfiltros'>
                      <span className='filtros'>
                        <button onClick={() => setFilter('all')}>Todos</button>
                        <button>por definir</button>
                        <button>por definir</button>
                        <button>por definir</button>
                        <button>por definir</button>
                      </span>
                      <span className='opciones-flitro'>
                        <button>...</button>
                        <button onClick={() => setSelectedMenuItem(null)}>X</button>
                      </span>
                    </section>
                    <div className='Cont'>
                      {AccesorioCuello.map((accessory, index) => (
                        <div key={index} className='accesorios-cuello' onClick={() => { selectAccesorioCuello(index); setSelectedCuello(accessory);setCuelloIndex(index) }}>
                          <div className='imgaccesorios-cuello'>
                            <img src={accessory.image} alt={`Accesorio Cuello ${index}`} />
                          </div>
                          <div className='contenedoraccesorios-cuello'>  
                          <p className='description'>{accessory.description}</p>
                            <p className='tipo'>{accessory.tipo}</p>
                            <p className='precio'>{accessory.price}</p>
                          </div>
                        </div>
                      ))}   
              </div>
            </div>
            )}
          {showAvatarList && (
            <div className="avatar-list-overlay">
              <h2 className='text-changeavatar'>Change Your Model</h2>
              <div className='contenedoravatares'>
                {avatars.map((avatar, index) => (
                  <div key={index} className='Avat'>
                    <img src={avatar} alt={`Avatar ${index + 1}`} />
                    <div className='infoandchange'>
                      <p>Descripción del avatar {index + 1}</p>
                      <button onClick={() => handleChangeAvatar(index)}>Select</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className='closelista'>
              <button className='clickable' onClick={handleHideAvatarList}>Close</button>
              </div>
            </div>
          )}
          {overlayVisible && (
            <div className="overlay">
              <div className="overlay-content">
                <button className="clickable" onClick={toggleOverlay}>X</button>
                <div className='imgOV'>
                  <div className='zoom-container'>
                    {canvasImage && <img src={canvasImage} alt="Avatar con prendas" />}
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className={`app ${selectedMenuItem === 'see-tops' ? 'left-menu-expanded' : ''} ${selectedMenuItem === 'see-bottoms' ? 'left-menu-expanded' : ''}`}>
            <div className="fullwindow">
            <button type="button" className='clickable' id="ventana-completa-btn" onClick={handleFullWindow}>
            {fullWindow ? 'Salir de pantalla completa' : 'Ventana Completa'}
            </button>
            </div>
            <div className="options">
              <button type="button" className='SL'>
              Save Look <FontAwesomeIcon icon={faHeart} />
              </button>
              <div className='optionsO'>
                <button type="button" onClick={toggleOverlay}>
                  <FontAwesomeIcon icon={faSearch} />
                </button>
                <button type="button">
                <FontAwesomeIcon icon={faInfoCircle} />
                </button>
              </div> 
            </div>  
            <div className="izquierda">
            {tipoPrenda === 'polos' && (
              <Prenda1 key={leftTop} src={leftTop} alt="Prenda 1" className="prenda1" onClick={handleSwapTopsLeft} />
            )}
            {tipoPrenda === 'accesoriosCabeza' && (
              <Prenda1 key={leftCabeza} src={leftCabeza} alt="Prenda 1" className="prenda1" onClick={handleSwapTopsLeft} />
            )}
            {tipoPrenda === 'accesoriosCuello' && (
              <Prenda1 key={leftCuello} src={leftCuello} alt="Prenda 1" className="prenda1" onClick={handleSwapTopsLeft} />
            )}
              <Prenda2 key={leftBottom} src={leftBottom} alt="Prenda 2" className="prenda2" onClick={handleSwapBottomsLeft} />
            </div>
            <div className="centro">
              <canvas ref={canvasRef} width="380" height="550"></canvas>
            </div>
            <div className="derecha">
            {tipoPrenda === 'polos' && ( 
              <Prenda3 key={rightTop} src={rightTop} alt="Prenda 1" className="prenda1" onClick={handleSwapTopsRight} />
            )}
            {tipoPrenda === 'accesoriosCabeza' && (
              <Prenda3 key={rightCabeza} src={rightCabeza} alt="Prenda 1" className="prenda1" onClick={handleSwapTopsRight} />
            )}
            {tipoPrenda === 'accesoriosCuello' && (
              <Prenda3 key={rightCuello} src={rightCuello} alt="Prenda 1" className="prenda1" onClick={handleSwapTopsRight} />
            )}
              <Prenda4 key={rightBottom} src={rightBottom} alt="Prenda 4" className="prenda4" onClick={handleSwapBottomsRight} />
            </div>
            <div className="left-buttons">
              <button className="button" onClick={handleSwapTopsLeft}>&lt;</button>
              <button className="button" onClick={handleSwapBottomsLeft}>&lt;</button> 
            </div>
            <div className="right-buttons"> 
              <button className="button" onClick={handleSwapTopsRight}>&gt;</button>  
              <button className="button" onClick={handleSwapBottomsRight}>&gt;</button>
            </div>
          </div>
          <div className={`right-menu ${selectedMenuItem === 'see-tops' ? 'left-menu-expanded' : ''}`}>
          <div className="purchase-item">
            <div className='imageprenda'>
              <img src={selectedTop.image} alt={selectedTop.name} />
            </div>
            <div className='infoprenda'>
              <div>{selectedTop.name}</div>
              <div>{selectedTop.tipo}</div>
              <div>${selectedTop.precio.toFixed(2)}</div> 
              <p>Colores:</p>
              <div>
                {selectedTop.colores.map(colorName => {
                  const colorValue = colorMap[colorName] || '#000';
                  return (
                    <ColorCircle 
                      key={colorName}
                      color={colorValue}
                      isSelected={selectedColorTop === colorValue}
                      onClick={() => setSelectedColorTop(colorValue)}
                    />
                  );
                })}
              </div>
              <div>
                <label htmlFor="tallas"></label>
                <select id="tallas" value={selectedTalla} onChange={handleTallaChange}>
                  <option value="" disabled>Selecciona una talla</option>
                  {selectedTop.tallas.map(talla => (
                    <option key={talla} value={talla}>{talla}</option>
                  ))}
                </select>
              </div>
              <button type="button" onClick={() => handleAddToBag(selectedTop)}>Add to Bag</button>
            </div>
          </div>
          <div className="purchase-item">
            <div className='imageprenda2'>
              <img src={selectedBottom.image} alt={selectedBottom.name} />
            </div>
            <div className='infoprenda'>
              <div>{selectedBottom.name}</div>
              <div>{selectedBottom.tipo}</div>
              <div>${selectedTop.precio.toFixed(2)}</div>
              <p>Colores:</p>
              <div>
                {selectedBottom.colors.map(colorName => {
                  const colorValue = colorMap[colorName] || '#000';
                  return (
                    <ColorCircle 
                      key={colorName}
                      color={colorValue}
                      isSelected={selectedColorBottom === colorValue}
                      onClick={() => setSelectedColorBottom(colorValue)}
                    />
                  );
                })}
              </div>
              <div className='infoprendaP'>
                <select id="bottomTallas" value={selectedBottomTalla} onChange={handleBottomTallaChange}>
                  <option value="" disabled>Selecciona una talla</option>
                  {selectedBottom.sizes.map(talla => (
                    <option key={talla} value={talla}>{talla}</option>
                  ))}
                </select>
              </div>
              <button type="button" onClick={() => handleAddToBag(selectedBottom)}>Add to Bag</button>
            </div>
          </div>
          {dibujarCabeza ? (
            <div className="purchase-item">
            <div className='imageprenda'>
              <img src={selectedCabeza.image} alt={selectedCabeza.name} />
            </div>
            <div className='infoprenda'>
              <div>{selectedCabeza.name}</div>
              <div>{selectedCabeza.tipo}</div>
              <div>{selectedCabeza.price}</div>
              <p>Colores:</p>
              <div>
                {selectedCabeza.colors.map(colorName => {
                  const colorValue = colorMap[colorName] || '#000';
                  return (
                    <ColorCircle 
                      key={colorName}
                      color={colorValue}
                      isSelected={selectedColorCabeza === colorValue}
                      onClick={() => setSelectedColorCabeza(colorValue)}
                    />
                  );
                })}
                {/* Comentario para las tallas de accesorios de cabeza */}
                {/* 
                <div>
                  <label htmlFor="cabezaTallas">Talla:</label>
                  <select id="cabezaTallas" value={selectedCabezaTalla} onChange={handleCabezaTallaChange}>
                    <option value="" disabled>Selecciona una talla</option>
                    {selectedCabeza.tallas.map(talla => (
                      <option key={talla} value={talla}>{talla}</option>
                    ))}
                  </select>
                </div>
                */}
              </div>
              <button type="button" onClick={() => handleAddToBag(selectedCabeza)}>Add to Bag</button>
            </div>
          </div>
          ) : null}

          {dibujarCuello ? (  
            <div className="purchase-item">
            <div className='imageprenda'>
              <img src={selectedCuello.image} alt={selectedCuello.name} />
            </div>
            <div className='infoprenda'>
              <div>{selectedCuello.name}</div>
              <div>{selectedCuello.tipo}</div>
              <div>{selectedCuello.price}</div>
              <p>Colores:</p>
              <div>
                {selectedCuello.colors.map(colorName => {
                  const colorValue = colorMap[colorName] || '#000';
                  return (
                    <ColorCircle 
                      key={colorName}
                      color={colorValue}
                      isSelected={selectedColorCuello === colorValue}
                      onClick={() => setSelectedColorCuello(colorValue)}
                    />
                  );
                })}
                {/* Comentario para las tallas de accesorios de cuello */}
                {/* 
                <div>
                  <label htmlFor="cuelloTallas">Talla:</label>
                  <select id="cuelloTallas" value={selectedCuelloTalla} onChange={handleCuelloTallaChange}>
                    <option value="" disabled>Selecciona una talla</option>
                    {selectedCuello.tallas.map(talla => (
                      <option key={talla} value={talla}>{talla}</option>
                    ))}
                  </select>
                </div>
                */}
              </div>
              <button type="button" onClick={() => handleAddToBag(selectedCuello)}>Add to Bag</button>
            </div>
            </div>
          ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

