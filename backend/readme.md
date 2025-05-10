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

ALTER TABLE menu_cards
ADD COLUMN category VARCHAR(10) DEFAULT 'veg';

CREATE TABLE service_categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE service_cards (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



CREATE TABLE service_card_categories (
  card_id INTEGER NOT NULL,
  category_id INTEGER NOT NULL,
  PRIMARY KEY (card_id, category_id),
  FOREIGN KEY (card_id) REFERENCES service_cards(id) ON DELETE CASCADE,
  FOREIGN KEY (category_id) REFERENCES service_categories(id) ON DELETE CASCADE
);


