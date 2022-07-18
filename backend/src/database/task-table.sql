-- tasks table
CREATE TABLE tasks (
    id int NOT NULL PRIMARY KEY,
    title text NOT NULL,
    content text NOT NULL,
    finished BOOLEAN DEFAULT false
    date timestamp NOT NULL DEFAULT now();
)