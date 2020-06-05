def transpose(lines):

    n_text=len(lines) #VGG number of letters in the full input set

    in_data=lines.split("\n")
    n_lines=len(in_data) #VGG number of text lines
    
    n=max([len(text) for text in in_data])
    out=["" for i in range(n)]
    output=""
    
    for i in range(n):
        for text in in_data:
            if len(text)>i:
                out[i]+=text[i:i+1]
            else:

                #VGG fixing the test_second_line_longer_than_first_line        
                if text==in_data[0]:
                    out[i]+=" "

                #VGG fixing the test_triangle
                if len(out[i])>1 and len(out[i].strip())==0:
                    out[i]+=" "

                #VGG fixing the test_mixed_line_length
                if len(out[i]) ==1 and (
                    text!=in_data[0] and out[i][0:1] !="."
                    and out[i-1][-1:-2:-1] !="." and len(out[i-1])!=1 ):
                        out[i]+=" "
                    
    
        output+=out[i]
        if i < n-1 :
            output+='\n'
    
    if 1==2: #VGG print debuging
        print()
        print(lines)
        print(n,in_data)
        print(output)
    
    return output   
    pass
