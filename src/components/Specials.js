import SpecialCard from './SpecialCard';

export default function Specials() {
    return (
        <section className="specials">
            <section className="specials-cards">
                <SpecialCard image="greek salad.jpg" name="Greek Salad" price="$12.99" description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives.
                 Dressed with salt, hot pepper, and olive oil."/>
                <SpecialCard image="bruchetta.svg" name="Bruschetta" price="$16.99" description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
                 salt and olive oil."/>
                <SpecialCard image="lemon dessert.jpg" name="Lemon Dessert" price="$8.50" description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
                 and lemon zest."/>
            </section>
        </section>
    );
}