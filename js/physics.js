
let collisionDetection = (a, b) => {
    let hitboxA = a.getBounds();
    let hitboxB = b.getBounds();

    return hitboxA.x + hitboxA.width > hitboxB.x &&
            hitboxA.x < hitboxB.x + hitboxB.width &&
            hitboxA.y + hitboxA.height > hitboxB.y &&
            hitboxA.y <hitboxB.y + hitboxB.height;
}