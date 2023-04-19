import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import fs from 'node:fs';


const file = fs.readFileSync('index.html', {encoding: 'utf8'});
const dom = new JSDOM(file);

/**
 * DO NOT MODIFY THIS FILE!
 */

test('header <img> tag exists and is not empty', (t) => {
    const h1 = dom.window.document.querySelectorAll('body > img');
    assert.ok(h1.length === 1, '<img> tag exists in <body>');
});
