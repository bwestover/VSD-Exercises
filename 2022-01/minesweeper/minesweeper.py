def annotate(minefield):
    # Given a minefield (which is a list), return an annotated minefield
    # with the mine counts filled out (as a list of strings)
#    if minefield == []:
#      return []

#    if minefield == [""]:
#      return [""]
    answer=[items for items in minefield]

    len_i=len(minefield)
    for i in range(len_i):
      len_j=len(minefield[i])
      for j in range(len_j):
        if minefield[i][j] == " ":
          counter = 0
          # test up-r-diagonal above
          if (i>0 and j<len_j-1 and minefield[i-1][j+1]=="*"):
            counter += 1
          # test row above
          if (i>0 and minefield[i-1][j]=="*"):
            counter += 1
          # test space to the left
          if (j>0 and minefield[i][j-1]=="*"):
            print("checking left")
            counter += 1
          # test diagonal up+left
          if (i>0 and j>0 and minefield[i-1][j-1]=="*"):
            counter += 1
          # test row below
          if (i<len_i-1 and minefield[i+1][j]=="*"):
            counter += 1
          # test space to the right
          if (j<len_j-1 and minefield[i][j+1]=="*"):
            print("checking right")
            counter += 1
          # test diagonal down+right
          if (i<len_i-1 and j<len_j-1 and minefield[i+1][j+1]=="*"):
            counter += 1
          # test diagonal down+left
          if (i<len_i-1 and j>0 and minefield[i+1][j-1]=="*"):
            counter += 1
          if counter > 0:
            print(counter)
            answer[i] = answer[i][0:j]+str(counter)+answer[i][j+1:]
            print(answer)
        pass
    print(answer)
    return answer
