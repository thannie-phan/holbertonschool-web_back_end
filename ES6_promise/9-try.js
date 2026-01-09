export default function guardrail(mathFunction) {
    const queue = [];

    try {
        const result = mathFunction();
        queue.push(result); // push is append to queue
    } catch (error) {
        queue.push(`${error}`);
    } finally {
        queue.push('Guardrail was processed');
    }
    return queue;
}