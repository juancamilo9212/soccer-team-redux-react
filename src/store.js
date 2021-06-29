import {createStore} from 'redux';
import jugador1 from './assets/jugador1.png';
import jugador2 from './assets/jugador2.png';
import jugador3 from './assets/jugador3.png';


const initialState = {
    jugadores:[
        {
            id:1,
            nombre:"Pepito Perez",
            foto:jugador1
        },
        {
            id:2,
            nombre:"Pepito Ramirez",
            foto:jugador2
        },
        {
            id:3,
            nombre:"Pepito Martinez",
            foto:jugador3
        }
    ],
    titulares:[],
    suplentes:[]
}

const reducerEntrenador = (state = initialState,action) => {
    switch (action.type) {
        case 'AGREGAR_TITULAR':
            return {
                ...state,
                titulares:state.titulares.concat(action.jugador),
                jugadores:state.jugadores.filter(jugador => jugador.id !== action.jugador.id)
            }
        case 'AGREGAR_SUPLENTE':
            return {
                ...state,
                suplentes:state.suplentes.concat(action.jugador),
                jugadores:state.jugadores.filter(jugador => jugador.id !== action.jugador.id)
            }
        case 'QUITAR_TITULAR':
            return {
                ...state,
                titulares:state.titulares.filter(titular => titular.id !== action.titular.id),
                jugadores:state.jugadores.concat(action.titular)
            }
        case 'QUITAR_SUPLENTE':
                return {
                    ...state,
                    suplentes:state.suplentes.filter(suplente => suplente.id !== action.suplente.id),
                    jugadores:state.jugadores.concat(action.suplente)
            }
        default:
        break;
    }
    return state;
}

export default createStore(reducerEntrenador);