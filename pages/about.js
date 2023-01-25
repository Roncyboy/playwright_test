import Link from "next/link";

export default function About () {
    return (
        //make a pretty about page 
        <>
        <h1>About</h1>
        <p>My name is <strong>Terrence Paiement</strong> and I am a student at <em>BCIT</em></p>
        <button>
        <Link href={'/'}>Go Back</Link>
        </button>
        </>
    )
}
