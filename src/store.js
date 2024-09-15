import { createStore } from 'redux';
import { NewsArchive } from './NewsFeedStore';

const initialState = {
    stories: NewsArchive
};

const storiesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_STORY':
            return {...state, stories: [...state.stories, action.payload]};
        case 'REMOVE_STORY':
            const newArr = state.stories.filter(s => s.id !== action.payload);
            return {...state, stories:[...newArr]};
        default:
            return state;
    }
}

const store = createStore(storiesReducer);

export default store;