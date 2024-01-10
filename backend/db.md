`CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    images JSON, -- Store all image links in a JSON object
    associated_links JSON,
    tags VARCHAR(255),
    markdown_text TEXT
);`

INSERT INTO projects (name, images, associated_links, tags, markdown_text)
VALUES ('Project Name', '{"icon": "path/to/icon.jpg", "front": "path/to/front.jpg", "gallery": ["path/to/gallery1.jpg", "path/to/gallery2.jpg"]}', '{"link1": "url1", "link2": "url2"}', 'tag1, tag2', 'Your markdown text here');

INSERT INTO projects (name, images, associated_links, tags, markdown_text)
VALUES ('Prospera', '{"front": "images/ancaptokyo.png"}', '{"website": "https://www.prospera.co/", "join": "https://www.prospera.co/residence-form", "x": "https://twitter.com/ProsperaGlobal", "discord": "https://discord.gg/eQGnF6aW6p"}', 'network-state, zede, private-city, special-economic-zone, charter-city', '# Prospera\nlalalalala lorem ipsem');

THERE ARE NO POSITIVE ARGUMENTS!!
Done before Christmas: crypto organisation, basic clojure & project work
Christmas: reading, blog & crypto research