import faker from 'faker'
const CHANGE_MARKER_POSITION = 'maze/mazeReducer/CHANGE_MARKER_POSITION'
const SET_DIRECTIONS = 'maze/mazeReducer/SET_DIRECTIONS'
const SET_SHOW_RESULT = 'maze/mazeReducer/SET_SHOW_RESULT'
const SET_IS_LOAD_DATA = 'maze/mazeReducer/SET_IS_LOAD_DATA'

const initialState = {
    fieldSize: 3,
    markerPozition: {
        x: 2,
        y: 3
    },
    directions: [
        {direction: 'left'},
        {direction:  'up', id: faker.random.uuid()},
        {direction:  'up', id: faker.random.uuid()},
        {direction:  'up', id: faker.random.uuid()},
        {direction:  'right', id: faker.random.uuid()},
        {direction:   'right', id: faker.random.uuid()},
        {direction:  'right', id: faker.random.uuid()},
        {direction:  'bottom', id: faker.random.uuid()},
        {direction:  'bottom', id: faker.random.uuid()},
        {direction:  'left', id: faker.random.uuid()},
    ],
    resultPosition: {
        x: 3,
        y: 2
    },
    showResult: false,
    isLoadData: true,
};

const mazeReducer = (state = initialState, action) =>{
    switch (action.type) {
        case CHANGE_MARKER_POSITION: {
          const newMarkerPosition = {
              x: Math.floor(Math.random()*state.fieldSize),
              y: Math.floor(Math.random()*state.fieldSize)
          }
          return {
              ...state, markerPozition: newMarkerPosition
          }
        };
        case SET_DIRECTIONS: {
            const newDirections = [];
            let previousDirection = '';
            let currentResultMarkerPosition = state.markerPozition;
            for(let i=0; i<10; i++) {
                let tryAgain = true;
                let direction = '';
                while (tryAgain) {
                    const nexStepNumber = Math.floor(Math.random() * 4);
                    switch (nexStepNumber) {
                        case 0: {
                            if (currentResultMarkerPosition.y === 0 || previousDirection==='bottom') continue;
                                direction = 'up';
                                currentResultMarkerPosition = {...currentResultMarkerPosition, y: currentResultMarkerPosition.y-1};
                                tryAgain = false;
                            break;
                        }
                        case 1:{
                            if(currentResultMarkerPosition.x === state.fieldSize-1||previousDirection==='left') continue;
                            direction = 'right';
                            currentResultMarkerPosition = {...currentResultMarkerPosition, x: currentResultMarkerPosition.x+1}
                            tryAgain = false;
                            break;
                        }
                        case 2:{
                            if(currentResultMarkerPosition.y === state.fieldSize -1||previousDirection==='up') continue;
                            direction = 'bottom';
                            currentResultMarkerPosition = {...currentResultMarkerPosition, y: currentResultMarkerPosition.y+1}
                            tryAgain = false;
                            break;}
                        case 3:{
                            if(currentResultMarkerPosition.x === 0||previousDirection==='right') continue;
                            direction = 'left';
                            currentResultMarkerPosition = {...currentResultMarkerPosition, x: currentResultMarkerPosition.x-1}
                            tryAgain = false;
                            break;}
                    }
                }
                previousDirection =direction;
                const newDirectionObj = {direction, id: faker.random.uuid()}
                newDirections.push(newDirectionObj);
            }
            return {
                ...state, directions: newDirections,
                resultPosition: currentResultMarkerPosition,
                isLoadData: true
            }
        }
        case SET_SHOW_RESULT:
        case SET_IS_LOAD_DATA:
            {
            return {...state, ...action.payload}
        }
        default: return state;
    }
};

export const generateNewGameData = () => (dispatch, getState) => {
    dispatch(changeMarkerPosition());
    dispatch(setDirections())
};

const changeMarkerPosition = () => ({type: CHANGE_MARKER_POSITION})
const setDirections = () => ({type: SET_DIRECTIONS});
export const setShowResult = (showResult) => ({type:SET_SHOW_RESULT, payload: {showResult}})
export const setIsLoadData = (isLoadData) => ({type:SET_IS_LOAD_DATA, payload: {isLoadData}})

export default mazeReducer;