import random

def get_choices():
    player = input("Enter a choice: ")
    options = ["paper", "scissors", "rock"]
    computer = random.choice(options)
    choice = {"player": player, "computer": computer}
    return choice

def check_winner(player, computer):
    print(f"{player.capitalize()} vs {computer.capitalize()}")
    if player == computer:
        return "It's a tie!"
    elif player == "rock":
        if computer == "scissors":
            return "Foo! Computer sucks"
        else:
            return "Okay I suck, I admit it"
    elif player == "paper":
        if computer == "rock":
            return "Well done!"
        else:
            return "Okay I sucked, it's ok"
    elif player == "scissors":
        if computer == "paper":
            return "Okay, you won, it's great"
        else:
            return "Computer sucks OMG!"

choices = get_choices()
result = check_winner(choices["player"], choices["computer"])
print(result)