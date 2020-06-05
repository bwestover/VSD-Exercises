def transform(legacy_data):
    # shiny_new_data = {}
    # for score, letter_list in legacy_data.items():
    #     for letter in letter_list:
    #         shiny_new_data[letter.lower()] = score
    #
    # return shiny_new_data

    return {letter.lower():score for score, letter_list in legacy_data.items()
                for letter in letter_list}
