import { Task } from '../models/task';
import { Store } from './storage';

describe('Given storage service', () => {
    describe('When we instantiate it', () => {
        let service: Store<Task>;
        beforeEach(() => {
            service = new Store();
        });
        test('Then if localStorage have data we use getStorage it should...', () => {
            Storage.prototype.getItem = jest.fn().mockReturnValue("['test']");
            const result = service.getStore();
            expect(localStorage.getItem).toHaveBeenCalled();
            expect(result).toEqual(['test']);
        });
        test('Then if localStorage does not have data we use getStorage it should...', () => {
            Storage.prototype.getItem = jest.fn();
            const result = service.getStore();
            expect(localStorage.getItem).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
        test('Then if we use setStorage it should...', () => {
            Storage.prototype.setItem = jest.fn();
            service.setStore([]);
            expect(localStorage.setItem).toHaveBeenCalled();
        });
    });
});
