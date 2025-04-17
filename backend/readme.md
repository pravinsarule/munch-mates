CREATE TABLE menu_cards (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  description TEXT,
  price INTEGER,
  image TEXT
);

CREATE TABLE slider (
    id SERIAL PRIMARY KEY,
    title TEXT,
    description TEXT,
    image TEXT
);

CREATE TABLE celebration_cards (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  image_url TEXT,
  category VARCHAR(100)
);


CREATE TABLE chefs (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  speciality VARCHAR(100),
  experience INT,
  image TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE chef_menus (
  id SERIAL PRIMARY KEY,
  chef_id INT REFERENCES chefs(id),
  menu_id INT REFERENCES menus(id)
);
