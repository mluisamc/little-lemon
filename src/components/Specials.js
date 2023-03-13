import SpecialCard from './SpecialCard';

export default function Specials() {
    return (
        <section className="specials">
            <section className="specials-cards">
                <SpecialCard image="greek salad.jpg" name="Greek Salad" price="$10.99" description="Green salad with mixed greens, romaine, and kale. Sweet, juicy tomatoes, snappy bell peppers, and crisp cucumbers abound."/>
                <SpecialCard image="bruchetta.svg" name="Bruschetta" price="$13.99" description="Toasted bread rubbed with garlic is topped with an herby, garlicky tomato mixture in this recipe for the freshest addition to any spread."/>
                <SpecialCard image="lemon dessert.jpg" name="Lemon Dessert" price="$7.99" description=" Dessert pie consisting of a shortened pastry base filled with lemon curd and topped with meringue."/>
            </section>
        </section>
    );
}