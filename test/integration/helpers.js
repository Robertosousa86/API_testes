import supertest from 'supertest';
import chai from 'chai';
import setupApp from '../../src/app';

global.setupApp = setupApp;
global.expect = chai.expect;
global.supertest = supertest;
