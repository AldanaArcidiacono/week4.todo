import { Task } from '../models/task';
import { TaskApi } from './task.api';

describe('Given TaskApi service', () => {
    describe('When we instantiate it', () => {
        let service: TaskApi;
        beforeEach(() => {
            service = new TaskApi();
        });
        test('Then if we use getTask it should return a Promise of an Array of Task', async () => {
            global.fetch = jest
                .fn()
                .mockResolvedValue({ json: jest.fn().mockResolvedValue([]) });
            const result = await service.getTask();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
        test('Then if we use createTask it should return a Promise of a new Task', async () => {
            const mockTask = new Task('', '');
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue(mockTask),
            });
            const result = await service.createTask(mockTask);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockTask);
        });
        test('Then if we use deleteTask it should...', async () => {
            await service.deleteTask(1);
        });
        test('Then if we use updateTas it should...', async () => {
            await service.updateTask(1, { isComplete: true });
        });
    });
});
