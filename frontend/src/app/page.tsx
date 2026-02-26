import HomePageTemplate from "../components/_templates/HomePageTemplate";

export default async function Home() {

    // await new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve("intentional delay")
    //     }, 10000)
    // })

    return (
        <section>
            <HomePageTemplate />
        </section>
    );
}
