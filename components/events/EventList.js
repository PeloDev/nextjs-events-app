import SingleEvent from "./SingleEvent";
import styles from './EventList.module.css';

export default function EventList(props) {

    const { events } = props;

    return (
        <ul className={styles.list}>
            {events.map(event => (
                <SingleEvent
                    key={event.id}
                    event={event}
                />
            ))}
        </ul>
    );
}
