CREATE TABLE "Admin" (
    id SERIAL PRIMARY KEY,
    email TEXT,
    password TEXT
);


CREATE TABLE "Calendar" (
    id SERIAL PRIMARY KEY,
    date DATE,
    description TEXT,
    image TEXT,
    location TEXT,
    title TEXT
);


CREATE TABLE "Events" (
    id SERIAL PRIMARY KEY,
    date DATE,
    description TEXT,
    facebook TEXT,
    image TEXT,
    linkedin TEXT,
    paragraph TEXT,
    readtime TEXT,
    title TEXT
);


CREATE TABLE "Galleries" (
    id SERIAL PRIMARY KEY,
    date DATE,
    images TEXT[],
    title TEXT
);

DROP TABLE "Events", "Calendar";

CREATE TABLE "Events" (
    id SERIAL PRIMARY KEY,
    date DATE,
    description TEXT,
    facebook TEXT,
    image TEXT,
    linkedin TEXT,
    paragraph TEXT,
    readtime TEXT,
    title TEXT,
    location TEXT
);

DROP TABLE "Galleries", "Events", "Admin";

CREATE TABLE admin (
    id SERIAL PRIMARY KEY,
    email TEXT,
    password TEXT
);

CREATE TABLE event (
    id SERIAL PRIMARY KEY,
    date DATE,
    description TEXT,
    facebook TEXT,
    image TEXT,
    linkedin TEXT,
    paragraph TEXT,
    readtime TEXT,
    title TEXT
);


CREATE TABLE gallery (
    id SERIAL PRIMARY KEY,
    date DATE,
    images TEXT[],
    title TEXT
);

DROP TABLE event;


CREATE TABLE event (
    id SERIAL PRIMARY KEY,
    date DATE,
    description TEXT,
    facebook TEXT,
    image TEXT,
    linkedin TEXT,
    paragraph TEXT,
    readtime TEXT,
    title TEXT,
    location TEXT
);

