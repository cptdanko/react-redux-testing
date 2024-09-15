import { NewsArchive } from "./NewsFeedStore"
import './NewsFeed.css';
import './App.css';
import { useDispatch, useSelector } from "react-redux";

/**
 * populate data from an array 
 * of news objects
 */
export const NewsFeed = () => {

    const news = useSelector((state) => state.stories);
    const dispatch = useDispatch();

    const addStory = () => {
        const newStory = {
            id: news[news.length - 1].id + 1,
            title: "Chatgpt5.0",
            description: "OpenAI to launch their newest version of the chat gpt worldwide"
        };
        dispatch({type: 'ADD_STORY', payload: newStory});
    }

    const removeStory = (id) => {
        console.log(`About to delete story ${id}`);
        dispatch({type: 'REMOVE_STORY', payload: id});
    }

    return (
        <div>
            <h1> Your latest news </h1>
            {news.map(story => {
                return (
                    <div className="Side-margins News-feed" 
                    key={story.id}>
                        <div className="Side-margins News-story">
                            <img alt="Image placeholder" src="#" width='100' height='100' />
                        </div>
                        <div className="Side-margins News-story">
                            <h3 className="Story-header">{story.title}</h3>
                            <p className="Story-content"> {story.description} </p>
                        </div>
                        <div>
                            <button onClick={() => removeStory(story.id)}>Delete</button>
                        </div>
                    </div>
                )
            })}
            <div>
                <button onClick={addStory} > Add Story </button>
            </div>
        </div>
    )
}