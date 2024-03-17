CREATE TABLE admin (
    id SERIAL PRIMARY KEY,
    email TEXT,
    password TEXT
);


CREATE TABLE gallery (
    id SERIAL PRIMARY KEY,
    date DATE,
    images TEXT[],
    title TEXT
);



CREATE TABLE event (
    id SERIAL PRIMARY KEY,
    date TEXT,
    time TEXT,
    description TEXT,
    facebook TEXT,
    image TEXT,
    linkedin TEXT,
    paragraph TEXT,
    readtime TEXT,
    title TEXT,
    location TEXT
);

