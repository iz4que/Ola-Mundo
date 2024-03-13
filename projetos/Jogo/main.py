import pygame

WIDTH = 1200
HEIGHT = 600
SPEED = 10
GAME_SPEED = 10
GROUND_WIDTH = 2 * WIDTH
GROUND_HEIGHT = 35

class player(pygame.sprite.Sprite):
    def __init__(self):
        pygame.sprite.Sprite.__init__(self)
        self.image_run = [pygame.image.load('runner_00.png'),
                          pygame.image.load('runner_01.png'),
                          pygame.image.load('runner_02.png'),
                          pygame.image.load('runner_03.png'),
                          pygame.image.load('runner_04.png'),
                          pygame.image.load('runner_05.png'),
                          ]
        self.image = pygame.image.load('runner_00.png').convert_alpha()
        self.rect = pygame.Rect(100, 457, 100, 100)
        self.current_image = 0

    def update(self, *args):
        def move_player(self):
            key = pygame.key.get_pressed()
            if key[pygame.K_d]:
                self.rect[0] += GAME_SPEED
            if key[pygame.K_a]:
                self.rect[0] -= GAME_SPEED
            self.current_image = (self.current_image + 1) % 6
            self.image = self.image_run[self.current_image]
            self.image = pygame.transform.scale(self.image,[100, 100])
        move_player(self)
        self.rect[1] += SPEED
        

class Ground(pygame.sprite.Sprite):
    def __init__(self, xpos):
        pygame.sprite.Sprite.__init__(self)
        self.image = pygame.image.load('grama.jpg')
        self.image = pygame.transform.scale(self.image,(GROUND_WIDTH, GROUND_HEIGHT))
        self.rect = self.image.get_rect()
        self.rect[0] = xpos
        self.rect[1] = HEIGHT - GROUND_HEIGHT

    def update(self, *args):
        self.rect[0] -= GAME_SPEED

def is_off_screen(sprite):
    return sprite.rect[0] < -(sprite.rect[2])

pygame.init()
game_window = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption('jogo 01')

BACKGROUND = pygame.image.load('background_03.png')
BACKGROUND = pygame.transform.scale(BACKGROUND,[WIDTH, HEIGHT])

playerGroup = pygame.sprite.Group()
player = player()
playerGroup.add(player)

groundGroup = pygame.sprite.Group()

for i in range(2):
    ground = Ground(WIDTH * i)
    groundGroup.add(ground)

game_loop = True
def draw():
    playerGroup.draw(game_window)
    groundGroup.draw(game_window)

def update():
    groundGroup.update()
    playerGroup.update()
clock = pygame.time.Clock()
while game_loop:
    clock.tick(10)
    game_window.blit(BACKGROUND, (0, 0))
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            break

    if is_off_screen(groundGroup.sprites()[0]):
        groundGroup.remove(groundGroup.sprites()[0])
        newGround = Ground(WIDTH - 20)
        groundGroup.add(newGround)

    if pygame.sprite.groupcollide(playerGroup, groundGroup, False, False):
        SPEED = 0
    else:
        SPEED = 20

    update()
    draw()
    pygame.display.update()
