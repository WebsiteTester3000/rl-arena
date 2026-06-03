*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:#f7f7f7;
    color:#111827;
    line-height:1.6;
}

.container{
    width:90%;
    max-width:1200px;
    margin:auto;
}

header{
    background:white;
    border-bottom:1px solid #e5e7eb;
    position:sticky;
    top:0;
    z-index:100;
}

.nav{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 0;
}

.nav h1{
    color:#0f172a;
}

nav a{
    text-decoration:none;
    color:#334155;
    margin-left:20px;
    font-weight:600;
}

.hero{
    padding:120px 0;
    background:white;
}

.tag{
    letter-spacing:4px;
    font-size:.9rem;
    color:#0f172a;
    font-weight:bold;
}

.hero h2{
    font-size:4rem;
    margin:20px 0;
    color:#0f172a;
}

.hero p{
    max-width:650px;
    color:#475569;
    margin-bottom:30px;
    font-size:1.1rem;
}

.btn{
    display:inline-block;
    background:#4f46e5;
    color:white;
    padding:14px 28px;
    border-radius:8px;
    text-decoration:none;
    transition:.3s;
}

.btn:hover{
    background:#4338ca;
}

.section{
    padding:80px 0;
}

.section h3{
    margin-bottom:20px;
    color:#0f172a;
    font-size:2rem;
}

.card{
    background:white;
    padding:25px;
    border-radius:12px;
    margin-bottom:40px;
    box-shadow:0 2px 10px rgba(0,0,0,.05);
}

.card ul{
    padding-left:20px;
}

.grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:20px;
}

.feature-card{
    background:white;
    padding:25px;
    border-radius:12px;
    transition:.3s;
    box-shadow:0 2px 10px rgba(0,0,0,.05);
}

.feature-card:hover{
    transform:translateY(-5px);
}

.dark{
    background:#0f172a;
    color:white;
}

.dark h3{
    color:white;
}

.audience{
    display:flex;
    flex-wrap:wrap;
    gap:15px;
    margin-bottom:30px;
}

.audience span{
    background:#1e293b;
    padding:10px 20px;
    border-radius:50px;
}

.center{
    text-align:center;
}

.join-form{
    margin-top:30px;
    display:flex;
    justify-content:center;
    gap:10px;
    flex-wrap:wrap;
}

.join-form input{
    padding:14px;
    width:300px;
    border:1px solid #cbd5e1;
    border-radius:8px;
}

.join-form button{
    background:#4f46e5;
    color:white;
    border:none;
    padding:14px 25px;
    border-radius:8px;
    cursor:pointer;
}

footer{
    text-align:center;
    padding:30px;
    background:white;
    border-top:1px solid #e5e7eb;
}

@media(max-width:768px){

    .nav{
        flex-direction:column;
        gap:15px;
    }

    .hero h2{
        font-size:2.5rem;
    }

    nav{
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
    }
}
