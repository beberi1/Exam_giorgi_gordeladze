
const AboutPage = () => {

    return(
        <>
        <h1 style={{color: 'white'}}> მოგესალმებით BTU-ს კლიკერში</h1>
        <h3 style={{color: 'white'}}>თამაშში თქვენი მიზანია აკლიკოთ ცენტრში მოძრავ ღილაკს და შეაგროვოთ ქულები</h3>
        <h3 style={{color: 'white'}}>ამ ქულეით შეძლებთ upgrade-ბის შეძენას რაც დაგეხმარებათ მეტი ქულის შეგროვებაში</h3>
        <h3 style={{color: 'white'}}>თავიდან გამოჩნდება მხოლოდ ორი upgrade თუმცა როცა მათ იყიდით გამოჩნდება ახლებიც (10-ამდე)</h3>
        <h3 style={{color: 'white'}}>პირველი upgrade ამატებს +1 ქულას ყოველ დაკლიკებაზე</h3>
        <h3 style={{color: 'white'}}>მეორე upgrade autoclicker-ია და ამატებს ქულებს ავტომატურად 1.5 წამში</h3>
        <h3 style={{color: 'white'}}>მესამე და შემდეგი upgrade-ები გავს მეორე upgrades თუმცა ამატებს უფრო მეტ ქულას</h3>
        <p style={{color: 'white'}}>თამაში დაწერილია React პლატფორმაზე და იყენებს json-server-ს</p>

        <img style={{height: '200px', width: '400px'}} src={`/background/react.gif`} alt="ReactImage"/>
        <a style={{color: 'white'}} href="https://github.com/beberi1">github ლინკი: https://github.com/beberi1</a>
    </>
    );
};

export default AboutPage;