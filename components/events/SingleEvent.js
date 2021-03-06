import Link from 'next/link';
import styles from './SingleEvent.module.css';

export default function SingleEvent(props) {

    const { title, image, date, location, id } = props.event;
    const humanReadableDate = new Date(date).toLocaleDateString(
        'en-US',
        {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }
    );
    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`

    return (
        <li className={styles.item}>
            <img src={'/' + image} alt={`${title} image`} />
            <div className={styles.content}>
                <div className={styles.summary}>
                    <h2>{title}</h2>
                    <div className={styles.date}>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={styles.address}>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={styles.actions}>
                    <Link href={exploreLink}>Explore Event</Link>
                </div>
            </div>
        </li>
    )
}
