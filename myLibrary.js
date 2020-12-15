
function hasCollided(lbullet,lwall)
{
    bulletRightEdge=bullet.x+lbullet.width;
    wallLeftEdge=lwall.x;
    if (bulletRightEdge>=wallLeftEdge)
    {
        return true
    }
    return false;
}